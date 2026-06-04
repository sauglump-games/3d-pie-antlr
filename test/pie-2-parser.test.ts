import { test, it, describe, before} from 'node:test'
import assert from 'node:assert'
import * as fs from 'fs'
import * as path from 'path'
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { PIE2Lexer } from '../src/g4/PIE2Lexer'
import { PIE2Parser, PieFileContext } from '../src/g4/PIE2Parser'
import { ANTLRErrorListener, RecognitionException, Recognizer } from 'antlr4ts'

// Custom error listener to capture parsing errors
class TestErrorListener implements ANTLRErrorListener<any> {
  errors: string[] = [];

  syntaxError<T>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    this.errors.push(`Line ${line}:${charPositionInLine} - ${msg}`);
    // Print relevant info about the offending symbol
    if (offendingSymbol && typeof offendingSymbol === 'object' && 'text' in offendingSymbol) {
      console.log(`Offending symbol text: '${offendingSymbol.text}'`);
    }
  }
}

[
  'drmbod13.pie',
  'drtrans.pie',
  'prhnaval1.pie',
  'prshov1.pie',
  'prslhtr4.pie',
  'prsltrk4.pie',
  'prslvtl1.pie',
  'prsrhtr4.pie',
  'prsrtrk4.pie',
  'prsrvtl1.pie'
]
.map((name: string) => {


  describe(`PIE2Parser can handle ${name}`, () => {
    var pieFile: PieFileContext;
    var lexerErrors: TestErrorListener;
    var parserErrors: TestErrorListener;

    before(()=>{
      const fixturePath = path.join('test', 'fixtures', 'PIE2', name)
      const input = fs.readFileSync(fixturePath, 'utf8')
      
      // Create the lexer and parser with error listeners
      const inputStream = CharStreams.fromString(input)
      // @ts-ignore - Bypass constructor type check
      const lexer = new PIE2Lexer(inputStream)
      const tokenStream = new CommonTokenStream(lexer)
      // @ts-ignore - Bypass constructor type check
      const parser = new PIE2Parser(tokenStream)
      
      // Add custom error listeners
      lexerErrors = new TestErrorListener()
      parserErrors = new TestErrorListener()
      lexer.removeErrorListeners()
      parser.removeErrorListeners()
      lexer.addErrorListener(lexerErrors)
      parser.addErrorListener(parserErrors)
      pieFile = parser.pieFile()
    })


    test('Parser should return some result', () => {
      assert.ok(pieFile)
    }) 




    test('has no lexer errors', () => {
      assert.deepEqual(lexerErrors.errors, [])
    });

    test('has no parser errors', () => {
      assert.deepEqual(parserErrors.errors, [])
    });
  });
})