import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)
  const port = configService.get('PORT')

  app.setGlobalPrefix('api')
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )

  await app.listen(port)
}
bootstrap()
