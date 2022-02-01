const fs = require('fs');
const generateDeltaFile = (pathToBaseFile, pathToFileForComparison, pathForOutputFileName = './csv/diff.csv') => {
    
    let baseFileContent = '', secondaryFileContent = '', changedLine = ''
    return new Promise((resolve, reject) => {

        const baseFileReadstream = fs.createReadStream(pathToBaseFile)
        baseFileReadstream
            .on('data', chunk => { baseFileContent = baseFileContent + chunk })
            .on('error', (err) => reject(err))
            .on('end', () => {

                const secondaryFileReadstream = fs.createReadStream(pathToFileForComparison)
                secondaryFileReadstream
                    .on('data', data => { secondaryFileContent = secondaryFileContent + data })
                    .on('error', (err) => reject(err))
                    .on('end', () => {

                        const internLines = baseFileContent.toString().split('\n');
                        const externLines = secondaryFileContent.toString().split('\n');
                        const externLookup = {};

                        externLines.forEach(eLine => externLookup[eLine] = true);
                        internLines.forEach(iLine => {
                            if (!externLookup[iLine]) changedLine = changedLine + iLine + '\n'
                        })

                        fs.writeFileSync(pathForOutputFileName, changedLine)
                        resolve('DONE')
                    })
            })
    })
}

(async () => {
    console.time("csv comparison time taken");
    //row difference data 1, 10, 100, 1000, 10000, 50000, 81486
    console.log(await generateDeltaFile('./csv/securities-base-file.csv', './csv/securities-secondary-file.csv'))
    console.timeEnd("csv comparison time taken")
})()
