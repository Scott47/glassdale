import { useOfficers, getOfficers } from './officers/OfficerProvider.js'
import { useCriminals, getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalList.js'




useOfficers()
getOfficers()

// getCriminals()
CriminalList()
