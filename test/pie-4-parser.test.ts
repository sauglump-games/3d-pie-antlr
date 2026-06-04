import { test, describe, before } from 'node:test'
import assert from 'node:assert'
import * as fs from 'fs'
import * as path from 'path'
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { PIE4Lexer } from '../src/g4/PIE4Lexer'
import { PIE4Parser, PieFileContext } from '../src/g4/PIE4Parser'
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
    _e: RecognitionException | undefined
  ): void {
    this.errors.push(`Line ${line}:${charPositionInLine} - ${msg}`);
    // Print relevant info about the offending symbol
    if (offendingSymbol && typeof offendingSymbol === 'object' && 'text' in offendingSymbol) {
      console.log(`Offending symbol text: '${offendingSymbol.text}'`);
    }
  }
}

[

'bldrdcm0.pie',
'blfact0.pie',
'blfact1.pie',
'blfact2.pie',
'blhq.pie',
'factory_module1.pie',
'factory_module2.pie',
'fireknee.pie',
'micrane.pie',
'trlassat.pie'
]
.map((name: string) => {


  describe(`PIE4Parser can handle ${name}`, () => {
    let pieFile: PieFileContext;
    let lexerErrors: TestErrorListener;
    let parserErrors: TestErrorListener;

    before(()=>{
      const fixturePath = path.join('test', 'fixtures', 'PIE4', name)
      const input = fs.readFileSync(fixturePath, 'utf8')
      
      // Create the lexer and parser with error listeners
      const inputStream = CharStreams.fromString(input)
      const lexer = new PIE4Lexer(inputStream)
      const tokenStream = new CommonTokenStream(lexer)
      const parser = new PIE4Parser(tokenStream)
      
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

    test('header should be parsed', () => {
      const header = pieFile.pieHeader()
      assert.ok(header, 'Header should be parsed')
    })

    test('has no lexer errors', () => {
      assert.deepEqual(lexerErrors.errors, [])
    });

    test('has no parser errors', () => {
      assert.deepEqual(parserErrors.errors, [])
    });
  });
})