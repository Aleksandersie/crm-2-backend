import {ApiProperty} from "@nestjs/swagger";

export class CreatePriceListDto {
    @ApiProperty({example:"retail", description: "Категория прайс листа" })
    readonly priceCategory: string;

    @ApiProperty({example:"1000", description: "Стоимость печати на самоклеющейся пленке" })
    readonly vinyl: number;

    @ApiProperty({example:"1000", description: "Стоимость печати и резки на самоклеющейся пленке" })
    readonly vinylPC: number;

    @ApiProperty({example:"1000", description: "Стоимость УФ печати на самоклеющейся пленке" })
    readonly  vinylUV:number;

}

