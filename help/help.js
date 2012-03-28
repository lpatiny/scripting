var help={
	"SD": {
		"description": "Spectra data manipulation",
		"functions": {
			loadJCamp: {}
		}
	},
	"ChemCalc": {
		description: "Molecular formula calculation",
		functions: {
			analyzeMF: {
				"usage": "analyzeMF(mf, options)",
				"parameters": {
					"mf": "The molecular formula to analyse",
					"options": {
						"isotopomers": "Should we calculate the isotompers, possible values are xy, jcamp or xy,jcamp",
						"resolution": "Specifiy the resolution to calculate the information (Default 0.001)"
					}
				},
				"short": "Get various information about a molecular formula",
				"long": "Retrieve as a JSON the information for a specified molecular formula"
			},
			mfFromMonoisotopicMass: {
				"usage": "mfFromMonoisotopicMass(mass, options)",
				"parameters": {
					"mass": "The target monoisotopic mass",
					"options": {
						"mfRange": "Molecular formula range like for example: 'C1-30H1-60' (Default: C0-20H0-40N0-5O0-8F0-3Cl0-3Br0-1)",
						"minUnsaturation":"Minimal number of unsaturation (Default: 0)",
						"maxUnsaturation":"Maximal number of unsaturation (Default: 50)",
						"integerUnsaturation":"Integer number of unsaturation (Default: true)",
						"useUnsaturation":"Should we use unsaturation as a filter if possible (Default: true)",
						"numberOfResultsOnly":"Returns only the number of results found (Default: false)",
						"massRange":"Range of mass to analyze (Default: 0.5)"
					}
				},
				"short": "Find a molecular formula from a monoisotopic mass",
				"long": "This general method allow to retrieve the possible molecular formula based on a monoisotopic mass. Various options may be specified.",
				"example": "mfFromMonoisotopicMass(397.17,{'mfRange':'C1-30F0-10H1-60N0-10O0-10'});"
			},
			getJcamp: {
				"usage": "getJcamp(mf, options)"
			},
			getXY: {
				"usage": "getXY(mf, options)"
			}
		}
	},
	"Distance": {
		description: "Distance calculation",
		functions: {
			areaOverlap2: {}
		}
	},
	"Default": {
		description: "General fucntions"
	}
}