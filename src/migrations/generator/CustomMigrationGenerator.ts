import { TSMigrationGenerator } from '@mikro-orm/migrations';

export class CustomMigrationGenerator extends TSMigrationGenerator {
  generateMigrationFile(
    className: string,
    diff: { up: string[]; down: string[] },
  ): string {
    const content = super.generateMigrationFile(className, diff);
    return content
      .replace('async up(): Promise<void>', 'up(): void')
      .replace('async down(): Promise<void>', 'down(): void');
  }
}
