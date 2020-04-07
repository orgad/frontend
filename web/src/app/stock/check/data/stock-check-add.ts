interface StockCheckAdd {
    whId: number;
    custId: number;
    brandId: number;
    goodsType: string;
    typeCode: string;
    typeMode: string;
    comment: string;
    checkLimits: StockCheckLimits[]
}