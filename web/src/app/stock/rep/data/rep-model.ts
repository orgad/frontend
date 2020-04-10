interface RepModel {
    id: number; //主键ID
    planId: number; //补货计划ID 
    code: string; //补货任务单号，RET开头
    status: string; //单据状态(未处理None,已完成:Finished)
    downStatus: string; //下架状态:未处理/处理中/已处理
    upStatus: string; //上架状态:未处理/处理中/已处理
}