export abstract class StorageService implements Storage {
  constructor(protected readonly api: Storage | null) {}

  get length(): number {
    if (this.api) {
      return this.api.length;
    }
    return 0;
  }

  clear(): void {
    if (this.api) {
      this.api.clear();
    }
  }

  getItem<T>(key: string): T | null {
    if (this.api) {
      const data = this.api.getItem(key);
      if (data !== null) {
        return JSON.parse(data) as T;
      }
    }
    return null;
  }

  key(index: number): string | null {
    if (this.api) {
      return this.api.key(index);
    }
    return null;
  }

  removeItem(key: string): void {
    if (this.api) {
      this.api.removeItem(key);
    }
  }

  setItem(key: string, value: unknown): void {
    if (this.api) {
      const data = JSON.stringify(value);
      this.api.setItem(key, data);
    }
  }
}
