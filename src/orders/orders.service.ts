import { Injectable } from "@nestjs/common";

@Injectable()
export class OrdersService {
    async getAllOrders() {
        return "get test";
    }
}
