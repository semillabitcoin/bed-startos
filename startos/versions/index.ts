import { VersionGraph } from '@start9labs/start-sdk'
import { v_0_1_0_1 } from './v0.1.0.1'
import { v_0_1_1_1 } from './v0.1.1.1'
import { v_0_1_2_1 } from './v0.1.2.1'
import { v_0_1_3_1 } from './v0.1.3.1'
import { v_0_1_4_1 } from './v0.1.4.1'
import { v_0_2_0_1 } from './v0.2.0.1'
import { v_0_3_0_1 } from './v0.3.0.1'
import { v_0_3_0_2 } from './v0.3.0.2'

export const versionGraph = VersionGraph.of({
  current: v_0_3_0_2,
  other: [v_0_1_0_1, v_0_1_1_1, v_0_1_2_1, v_0_1_3_1, v_0_1_4_1, v_0_2_0_1, v_0_3_0_1],
})
