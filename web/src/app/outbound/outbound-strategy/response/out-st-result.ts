interface OutStResult
{
    tSt:OutStModel,
    tStDs:OutStD[],
    tStDelivery:StDelivery,/*发货策略 */
    tStAlot:StAlot,/*库存分配策略 */
    tStPiror:StPiror, /*优先发货策略 */
    tStWave:StWave,/*波次策略 */
    tStPick:StPick,/*拣货策略 */
}