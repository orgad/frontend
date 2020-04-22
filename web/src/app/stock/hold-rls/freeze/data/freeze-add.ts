interface FreezeAdd {
    whId: number;
    custId: number;
    brandId: number;
    goodsType: string;
    reasonCode: string;
    typeMode: string;
    comment: string;
    checkLimits: FreezeLimits[]
}