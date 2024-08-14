import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Преобразование типов данных
      whitelist: true, // Удаление неожиданных свойств
      forbidNonWhitelisted: true, // Генерация ошибки, если в запросе есть неожиданные свойства
    }),
  )

  await app.listen(3000)
}
bootstrap().then()
