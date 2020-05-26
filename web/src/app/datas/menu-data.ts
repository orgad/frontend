export const MenuData = [
    { title: "看板", children: [
        
    ] },
    {
        title: "模板", children: [
            { title: "打印模板", router: "tmpl/print-list" }
        ]
    },
    {
        title: "仓库管理",
        children: [
            { title: "货区", router: "wh/zone" },
            { title: "货架", router: "wh/duty" },
            { title: "货位", router: "wh/bin" }
        ]
    },
    {
        title: "商品管理", children: [
            { title: "品类", router: "prod/catalog" },
            { title: "品名", router: "prod/product" },
            { title: "商品", router: "prod/sku" },
            { title: "条码", router: "prod/barcode" }
        ]
    },
    {
        title: "客户管理", children: [
            { title: "客户", router: "cust/customer" },
            { title: "品牌", router: "cust/brand" },
            { title: "门店", router: "cust/shop" },
            { title: "渠道", router: "cust/place" }
        ]
    },
    {
        title: "供应商", children: [
            { title: "承运商", router: "sup/courier" }
        ]
    },
    {
        title: "入库管理", children: [
            { title: "入库策略", router: "in/st" },
            { title: "到货通知", router: "in/asn" },
            { title: "验货", router: "in/asnCheck" },
            { title: "入库", router: "in/inbound" },
            { title: "质检", router: "in/qc" },
            { title: "上架建议", router: "in/putAwayAdvice" },
            { title: "上架", router: "in/putAway" },
            { title: "单据日志", router: "in/logs/optlog" }
        ]
    },
    {
        title: "退货", children: [
            { title: "退货通知", router: "return-in/rn" },
            { title: "退货质检", router: "return-in/qc" },
            { title: "退货收货", router: "return-in/rcv" },
            { title: "退货上架", router: "return-in/putAway" }
        ]
    },
    {
        title: "出库管理", children: [
            { title: "出库策略", router: "out/st" },
            { title: "发货通知", router: "out/dn" },
            { title: "出库单", router: "out/outbound" },
            { title: "库存分配", router: "out/allot" },
            { title: "波次拣货", router: "out/wave" },
            { title: "按单拣货", router: "out/picking" },
            { title: "物流面单", router: "out/express" },
            { title: "复核", router: "out/recheck" },
            { title: "出库质检", router: "out/qc" },
            { title: "交接", router: "out/handOver" }
        ]
    },
    {
        title: "库存查询", children: [
            { title: "库存查询", router: "invt/invtList" },
            { title: "库存详情", router: "invt/invtDetailList" },
            { title: "库存跟踪", router: "invt/invtLogList" }
        ]
    },
    {
        title: "库存管理", children: [
            { title: "补货", router: "stock/rep" },
            { title: "移货", router: "stock/move" },
            { title: "冻结", router: "stock/freeze" },
            { title: "解冻", router: "stock/unfreeze" },
            { title: "盘点", router: "stock/check" },
            { title: "调整", router: "stock/adj" },
            { title: "调拨", router: "stock/trans" }
        ]
    },
    {
        title: "示例", children: [
            { title: "打印", router: "example/print" },
            { title: "云打印", router: "example/cloudprint" },
            { title: "模板打印", router: "example/tmplprint" },
            { title: "面单打印", router: "example/trackingprint" },
            { title: "顺丰面单打印", router: "example/sfwaybill" },
            { title: "查询表单", router: "example/searchform" },
            { title: "编辑表单", router: "example/editform" },
            { title: "选择表单", router: "example/selectform" },
            { title: "上传表单", router: "example/uploadform" }
        ]
    }
];

