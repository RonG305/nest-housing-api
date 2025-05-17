import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.setGlobalPrefix('api')
  app.enableCors({
    allowedHeaders: '*',
    origin: "*"
  })
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application running on : ${await app.getUrl()}/api`)
}
bootstrap();
