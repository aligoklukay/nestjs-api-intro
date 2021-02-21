import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [ProductsModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
