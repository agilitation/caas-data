const {t} = require('transflow');

module.exports = [
    {
        name: t('Pays de l\'Union Européenne'),
        countries: [
            {iso: 'DEU', label: t('Allemagne')},
            {iso: 'AUT', label: t('Autriche')},
            {iso: 'BEL', label: t('Belgique')},
            {iso: 'BGR', label: t('Bulgarie')},
            {iso: 'CYP', label: t('Chypre')},
            {iso: 'HRV', label: t('Croatie')},
            {iso: 'DNK', label: t('Danemark')},
            {iso: 'ESP', label: t('Espagne')},
            {iso: 'EST', label: t('Estonie')},
            {iso: 'FIN', label: t('Finlande')},
            {iso: 'FRA', label: t('France')},
            {iso: 'GRC', label: t('Grèce')},
            {iso: 'HUN', label: t('Hongrie')},
            {iso: 'IRL', label: t('Irlande')},
            {iso: 'ITA', label: t('Italie')},
            {iso: 'LVA', label: t('Lettonie')},
            {iso: 'LTU', label: t('Lituanie')},
            {iso: 'LUX', label: t('Luxembourg')},
            {iso: 'MLT', label: t('Malte')},
            {iso: 'NLD', label: t('Pays-Bas')},
            {iso: 'POL', label: t('Pologne')},
            {iso: 'PRT', label: t('Portugal')},
            {iso: 'CZE', label: t('République tchèque')},
            {iso: 'ROU', label: t('Roumanie')},
            {iso: 'GBR', label: t('Royaume-Uni')},
            {iso: 'SVK', label: t('Slovaquie')},
            {iso: 'SVN', label: t('Slovénie')},
            {iso: 'SWE', label: t('Suède')},
        ]
    },
    {
        name: t('Pays bénéficiant d\'une décision d\'adéquation'),
        countries: [
            {iso: 'ARG', label: t('Argentine')},
            {iso: 'CAN', label: t('Canada')},
            {iso: 'GGY', label: t('Guernesey')},
            {iso: 'IMN', label: t('Île de Man')},
            {iso: 'JEY', label: t('Jersey')},
            {iso: 'CHE', label: t('Suisse')},
            {iso: 'USA', label: t('États Unis')},
        ]
    }
];
