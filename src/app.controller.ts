import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiMessage, AppEnums} from  "./Student/CommanFiles/AppEnums"
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello():any {
  return this.appService.getHello();
  }

  // @Post()
  // insertData(){
  //   return {ok:2}
  // }
  
}
