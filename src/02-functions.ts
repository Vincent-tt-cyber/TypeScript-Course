function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 1);

function log(name: string, userId?: string) : void {
  console.log("Hello, ", name, "widthID", userId || "anonym");
}
log("Maxim", "123")

function crash(): never {
  throw new Error("crash");
}
