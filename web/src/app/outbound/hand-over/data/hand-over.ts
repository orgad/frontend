interface HandOver {
    id: number,
    whId:number,
    custId:number,
    code: string,
    store: 0,
    qty: number,
    cartonQty: number,
    firstScanAt: Date,
    lastScanAt: Date,
    isCancel: boolean,
    isConfirm: boolean,
    comment: string,
    createdBy: string,
    createdTime: Date,
    lastModifiedBy: string,
    lastModifiedTime: Date
}