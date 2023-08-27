import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import { PokedexService } from './pokedex.service';
import { PokedexController } from './pokedex.controller';
import { Pokedex, PokedexSchema } from './entities/pokedex.entity';

@Module({
  controllers: [ PokedexController ],
  providers: [ PokedexService ],
  imports: [
    ConfigModule,
    MongooseModule.forFeature( [
      {
        name: Pokedex.name,
        schema: PokedexSchema
      }
    ] )
  ],
  exports: [ MongooseModule ]
})
export class PokedexModule {}
