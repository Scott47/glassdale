import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import { NoteForm } from './notes/NoteForm.js'
import { NoteList } from './notes/NoteList.js'
import { alibiListener } from './criminals/AlibiList.js'


getConvictions().then(ConvictionSelect())
OfficerSelect()
// OfficerList()
CriminalList()
NoteForm()
NoteList()
alibiListener ()