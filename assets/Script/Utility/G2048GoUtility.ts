import FYLog from "../../Base/FYFramework/Log/FYLog";
import GConst2048Go from "../Define/GConst2048Go";

export default class G2048GoUtility {
    /**
     * 校验方块横坐标索引
     * @param indexX 方块横坐标索引
     * @returns 
     */
    public static checkBlockIndexX(indexX: number) {
        if (indexX >= GConst2048Go.BLOCK_COL_NUM_MAX) {
            FYLog.error(`indexX = ${indexX} >= GConst2048Go.BLOCK_COL_NUM_MAX = ${GConst2048Go.BLOCK_COL_NUM_MAX}`);
            return false;
        }

        if (indexX < 0) {
            FYLog.error(`indexX = ${indexX} < 0`);
            return false;
        }

        return true;
    }

    /**
     * 校验方块纵坐标索引
     * @param indexY 方块纵坐标索引
     * @returns 
     */
    public static checkBlockIndexY(indexY: number): boolean {
        if (indexY >= GConst2048Go.BLOCK_ROW_NUM_MAX) {
            FYLog.error(`indexY = ${indexY} >= GConst2048Go.BLOCK_ROW_NUM_MAX = ${GConst2048Go.BLOCK_ROW_NUM_MAX}`);
            return false;
        }

        if (indexY < 0) {
            FYLog.error(`indexY = ${indexY} < 0`);
            return false;
        }

        return true;
    }

    /**
     * 计算方块Y轴位置
     * @param indexY 方块的纵坐标索引
     * @returns 
     */
    public static calcBlockPositionY(indexY: number): number {
        if (!G2048GoUtility.checkBlockIndexY(indexY)) {
            return 0;
        }

        return GConst2048Go.BLOCK_Y_GAP + GConst2048Go.BLOCK_POSITION_Y_MIN + indexY * (GConst2048Go.BLOCK_SIDE_LENGTH + GConst2048Go.BLOCK_Y_GAP);
    }
}