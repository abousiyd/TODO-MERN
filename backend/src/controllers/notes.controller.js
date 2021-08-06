const notesCtrl = {}

notesCtrl.getNotes = (req, res) => res.json({message: [{n:'1'}]})
notesCtrl.createNote = (req, res) => res.json({message: 'Note Saved'})

notesCtrl.getNote = (req, res) => res.json({title: 'gigig'})
notesCtrl.updateNote = (req, res) => res.json({message: 'Note Updated'})
notesCtrl.deleteNote = (req, res) => res.json({message: 'Note Deleted'})

module.exports = notesCtrl