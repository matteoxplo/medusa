import * as entities from "./src/models"
import { defineMikroOrmCliConfig, Modules } from "@medusajs/framework/utils"

export default defineMikroOrmCliConfig(Modules.AUTH, {
  entities: Object.values(entities),
})
