SELECT value
 FROM OPENROWSET (BULK '/Users/denizevrendilek/Documents/GitHub/nwHackProject/nwHackProject/text.json', SINGLE_CLOB) as j
 CROSS APPLY OPENJSON(BulkColumn)