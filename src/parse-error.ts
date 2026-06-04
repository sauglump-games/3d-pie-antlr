import { ANTLRErrorListener, Lexer, Parser, Recognizer } from "antlr4ts";

/** Thrown by `PIEModel.parse` when a file is syntactically invalid. */
export class PieSyntaxError extends Error {
  constructor(public readonly errors: string[]) {
    super(`Failed to parse PIE file:\n${errors.join("\n")}`);
    this.name = "PieSyntaxError";
  }
}

/** Thrown when declared counts (POINTS n, POLYGONS n, ...) disagree with the
 *  actual number of records that follow. */
export class PieValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PieValidationError";
  }
}

/** Collects (rather than prints) lexer/parser syntax errors. */
export class CollectingErrorListener implements ANTLRErrorListener<any> {
  readonly errors: string[] = [];

  syntaxError<T>(
    _recognizer: Recognizer<T, any>,
    _offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string
  ): void {
    this.errors.push(`line ${line}:${charPositionInLine} ${msg}`);
  }
}

/**
 * Replace the default (stderr-printing) error listeners on a lexer/parser pair
 * with a single collector, returned so the caller can inspect it after parsing.
 */
export function attachErrorCollector(lexer: Lexer, parser: Parser): CollectingErrorListener {
  const collector = new CollectingErrorListener();
  lexer.removeErrorListeners();
  parser.removeErrorListeners();
  lexer.addErrorListener(collector);
  parser.addErrorListener(collector);
  return collector;
}

/** Throw a {@link PieSyntaxError} if the collector captured any errors. */
export function throwIfSyntaxErrors(collector: CollectingErrorListener): void {
  if (collector.errors.length > 0) {
    throw new PieSyntaxError(collector.errors);
  }
}

/** Assert a declared count matches the actual number of parsed records. */
export function assertCount(label: string, declared: number, actual: number): void {
  if (declared !== actual) {
    throw new PieValidationError(
      `${label}: header declares ${declared} but found ${actual}`
    );
  }
}
