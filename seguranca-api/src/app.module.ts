import { Module } from '@nestjs/common';
import { AppController } from './controller/epi.controller';
import { AppService } from './service/epi.service';
import { EpiRepository } from './repository/epi.repository';
import { TreinamentoService } from './service/treinamento.service';
import { TreinamentoRepository } from './repository/treinamento.repository';
import { TreinamentoController } from './controller/treinamento.controller';
import { AuthService } from './service/auth/auth.service';
import { AuthController } from './controller/auth/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, TreinamentoController, AuthController],
  providers: [AppService, EpiRepository, TreinamentoService, TreinamentoRepository, AuthService],
})
export class AppModule {}

