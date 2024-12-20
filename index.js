const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database'); // Importă conexiunea la baza de date
const parentRoutes = require('./routes/parentRoutes');
const childRoutes = require('./routes/childRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/parents', parentRoutes);
app.use('/api/children', childRoutes);


sequelize.sync().then(() => {
    console.log('Baza de date a fost sincronizată!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serverul rulează pe http://localhost:${PORT}`);
});
