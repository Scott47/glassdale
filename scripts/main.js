import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { getConvictions } from './convictions/ConvictionProvider.js'


getConvictions().then(ConvictionSelect())
OfficerSelect()
// OfficerList()
CriminalList()