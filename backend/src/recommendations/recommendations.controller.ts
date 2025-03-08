import { Controller, Get } from '@nestjs/common';

@Controller('recommendations')
export class RecommendationsController {
  @Get()
  getRecommendations() {
    return [
      { id: 1, name: 'White T-Shirt', brand: 'Uniqlo' },
      { id: 2, name: 'Black Hoodie', brand: 'Nike' },
      { id: 3, name: 'Denim Jacket', brand: 'Levi\'s' }
    ];
  }
}