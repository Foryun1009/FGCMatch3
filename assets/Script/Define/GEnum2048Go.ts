export module GEnum2048Go {
    /** 方向 */
    export enum Direction {
        /** 朝上 */
        Top,
        /** 朝下 */
        Bottom,
        /** 朝左 */
        Left,
        /** 朝右 */
        Right,
    }
    export enum Event {
        /** 掉落动画完成 */
        DropAnimComplete = 'DropAnimComplete',
        /** 合并动画完成 */
        MergeAnimComplete = 'MergeAnimComplete',
        /** 选择方块 */
        PropSelectBlock = 'PropSelectBlock',
    }
}