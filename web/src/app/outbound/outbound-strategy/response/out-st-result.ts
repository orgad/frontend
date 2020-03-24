interface OutStResult
{
    tOutSt:OutStModel,
    tOutStDs:OutStD[],
    tOutStDelivery:StDelivery,/*发货策略 */
    tOutStAlots:StAlot[],/*库存分配策略 */
    tOutStPiror:StPiror, /*优先发货策略 */
    tOutStWaves:StWave[],/*波次策略 */
    tOutStPick:StPick,/*拣货策略 */
}