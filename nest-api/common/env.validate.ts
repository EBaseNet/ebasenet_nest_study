import { plainToInstance } from 'class-transformer'
import { IsNumber, validateSync } from 'class-validator'

export enum EnvKey {
    PORT = 'PORT'
}

class EnvironmentVariables {
    @IsNumber()
    PORT: number
}

export function validate(config: Record<string, unknown>) {
    const validatedConfig = plainToInstance(EnvironmentVariables, config, {
        enableImplicitConversion: true
    })
    const errors = validateSync(validatedConfig, {
        skipMissingProperties: false
    })
    if (errors.length > 0) {
        throw new Error(errors.toString())
    }

    return validatedConfig
}