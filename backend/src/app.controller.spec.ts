ts
복사편집
import { Controller, Get } from '@nestjs/common';

@Controller('recommendations')
export class RecommendationController {
  @Get()
  getRecommendations() {
    return { message: "추천 패션 아이템 리스트" };
  }
}