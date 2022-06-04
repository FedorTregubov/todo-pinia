export function logger<T>(humanMessage: string, error: T): void {
  console.error(humanMessage, error);
}
