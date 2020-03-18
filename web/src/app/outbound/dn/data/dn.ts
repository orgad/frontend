interface Dn {
    id: number,
    code: string,
    batchNo: string,
    whId:string,
    custId: string,
    brandId:string,
    refNo: string,
    transCode: string,
    srcCode: string,
    status: string,
    expectAt: Date,
    detailDTOList: DnDetail[]
}