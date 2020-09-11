let preFilter = /(\.308|\.38|\.45|\.50|Advanced|Agitated|All Star|Aluminum|Anti-Power Armor|Anti-armor|Appalachian Thunder Pipe|Armor Piercing|Assassin's|Atom Cats|Automatic|Barbed|Bats|Bayoneted|Berserker's|Beta Wave|Black Knight|Blackbird|Bladed|Bleedout|Blood Eagle|Bloodied|Blue|Blue Camouflage|Boney|Boosted|Boosted Agitated|Boosted Fiery|Bow Bar|Brotherhood of Steel|Bull Barrel|Burning|Burning Barbed|Burning Torch|Calibrated|Calibrated Powerful|Camouflage|Cedar|Chain-wrapped|Charging|Chef's|Chrome Plated|Clandestine Service|Comfort Grip|Communist|Compensated|Compressed|Concussive|Converted|Critical|Critical .38|Critical .45|Critical .50|Crystallized|Cursed|Curved|Dark Matter|Deep Cave Hunter|Double\b(?!-)|Dual Bar|Electrified|Electrified Serrated|Endangerol|Excited|Executioner's|Explosive|Extended|Exterminator's|Fancy|Fierce|Fiery|Finned|Fireman|Fireworks|Five-Crank|Flame|Flaming|Flatwoods Fletcher|Flintlock|Fluted|Focused|Four-Crank|Free State|Frenzy|Frostbite|Furious|Gamma Wave|Ghillie|Ghoul Slayer's|Gilded|Glass-Covered|Glow-Sighted|Gold|Golden|Grey|Hair Trigger|Hardened|Hardened Piercing|Hasty|Hasty .38|Hasty .45|Hasty .50|Heated|Heavy|Heavy Searing Sharp|Heavy Sharp|Heavy Shocking Sharp|Heavy Spiked|Hex Barrel|High Capacity|High Powered|High Speed|Hooked|Horned|Hot Rod Flames|Hot Rod Shark|Huge|Hunter's|Improved|Improved Automatic|Improved Charging|Improved Focused|Improved Long|Improved Scattered|Improved Short|Improved Targeting|Incendiary|Instigating|Inventor|Jack O' Lantern|Junkie's|Karma|Large|Lead Lined|Light|Lobber|Long|Long Bow Bar|Lucille's Lullaby|Mahogany|Marksman's|Matte Black|Maximized|Maximum Capacity|Medic's|Modern|Mutant Slayer's|Mutant's|Muzzled|Never Ending|Night-Vision|Nocturnal|Nuka-Cola|Nuka-Cola Cherry|Nuka-Cola Quantum|Oak|Overcharged|Painted|Penetrating|Penta Barrel|Pioneer Scout|Pioneer Scout's|Poisoned|Ported|Powerful|Precise .38|Precise .45|Precise .50|Prime|Puncturing|Quad|Quad Barrel|Quick|Quick High Capacity|Quick Maximum Capacity|R91|Radscorpion Venom|Rapid|Recoil Compensated|Recon|Red|Refined|Refined .38|Refined .45|Refined .50|Repeating|Responder's|Rocket Bat|Rocket Hammer|Rocket Swatter|Sawed-Off|Scabber|Scattered|Scoped|Scorch Killer's|Screaming Eagle|Screaming Eagle Wood|Searing|Searing Puncturing Rocket|Security|Serrated|Service Award|Settler Special|Severe|Shark|Sharp|Sharpshooter's|Shi|Shielded|Shock|Shocking Puncturing|Short|Shredding|Sighted|Six-Crank|Snappy|Snubnosed|Special Issue|Speedy|Spiked|Stalker's|Starlet Sniper|Steadfast|Steady|Stealth Blade|Stun|Stunning|Suppressed|Suppressor's|Survival|Survivor's|Tactical|Targeting|Tesla Capacitor|Tesla Dynamo|The Peppered|The Salty|The Spicy|Three-Crank|Toothed|Tricentennial|Triple Barrel|Troubleshooter's|True|Tuned|Turbo|Tweaked|Two Shot|Untarnished|Vampire's|Vaporizing|Vault-Tec|Vented|Vicious|Vigorous|Weighted|Yellow|Zealot's)\b/g;
let postFilter = /(Rifle|Pistol|Thrower|Sniper Rifle|Scattergun|Shotgun|Automatic Rifle|Auto Pistol|The|Plasma|Cryo|Black)\b/g;
let weapons = new Map();
weapons.set("Protest Sign - Against Automation", {signature:  "WEAP", formId:  "002D4857", editorId:  "ProtestSign03"});
weapons.set("Anti-Scorched 10mm Submachine Gun", {signature:  "WEAP", formId:  "003AAB76", editorId:  "MTR06_10mmSMG_ScorchedKiller"});
weapons.set("Vault 96 Suppression Grenade III", {signature:  "WEAP", formId:  "005439AC", editorId:  "V96_1_WeapSuppressionGrenade_III"});
weapons.set("Vault 96 Suppression Grenade II", {signature:  "WEAP", formId:  "005439AB", editorId:  "V96_1_WeapSuppressionGrenade_II"});
weapons.set("Protest Sign - Men Not Machines", {signature:  "WEAP", formId:  "002D4A7F", editorId:  "ProtestSign09"});
weapons.set("Vault 96 Suppression Grenade I", {signature:  "WEAP", formId:  "005428CA", editorId:  "V96_1_WeapSuppressionGrenade_I"});
weapons.set("Vault 96 Suppression Mine III", {signature:  "WEAP", formId:  "005439AF", editorId:  "V96_1_WeapSuppressionMine_III"});
weapons.set("Protest Sign - Give Jobs Back", {signature:  "WEAP", formId:  "002D4867", editorId:  "ProtestSign07"});
weapons.set("Protest Sign - Ain't a Commie", {signature:  "WEAP", formId:  "002D4AA0", editorId:  "ProtestSign10"});
weapons.set("Orbital Missile Strike Beacon", {signature:  "WEAP", formId:  "004ECC0E", editorId:  "PulseGrenadeStrike"});
weapons.set("Anti-Scorched Training Pistol", {signature:  "WEAP", formId:  "004F496F", editorId:  "MTR05_10mm_ScorchedTrainer"});
weapons.set("Vault 96 Suppression Mine II", {signature:  "WEAP", formId:  "005439AE", editorId:  "V96_1_WeapSuppressionMine_II"});
weapons.set("Protest Sign - Jobs or Blood", {signature:  "WEAP", formId:  "002D4866", editorId:  "ProtestSign06"});
weapons.set("Protest Sign - Dad Needs Job", {signature:  "WEAP", formId:  "002D481E", editorId:  "ProtestSign01"});
weapons.set("Protest Sign - Block the Bot", {signature:  "WEAP", formId:  "002D4960", editorId:  "ProtestSign08"});
weapons.set("Vault 96 Suppression Mine I", {signature:  "WEAP", formId:  "005439AD", editorId:  "V96_1_WeapSuppressionMine_I"});
weapons.set("Protest Sign - Want to Work", {signature:  "WEAP", formId:  "002D4864", editorId:  "ProtestSign04"});
weapons.set("Protest Sign - People First", {signature:  "WEAP", formId:  "002D4865", editorId:  "ProtestSign05"});
weapons.set("Fragmentation Grenade MIRV", {signature:  "WEAP", formId:  "00113849", editorId:  "DLC04_FragGrenadeMIRV"});
weapons.set("Fancy Pump Action Shotgun", {signature:  "WEAP", formId:  "005A38DA", editorId:  "MTNL01_PumpActionShotgun_FancyDUPLICATE000"});
weapons.set("Salvaged Assaultron Head", {signature:  "WEAP", formId:  "0010FAA7", editorId:  "DLC01AssaultronHeadCharging"});
weapons.set("Pint-Sized Slasher Knife", {signature:  "WEAP", formId:  "00033FE0", editorId:  "Machete"});
weapons.set("Imposter Assaultron Head", {signature:  "WEAP", formId:  "00424B66", editorId:  "ATX_AssaultronHeadCharging_Imposter"});
weapons.set("Black Powder Blunderbuss", {signature:  "WEAP", formId:  "00003AAD", editorId:  "Blackpowder_Pistol_Blunderbuss"});
weapons.set("Vertibot Signal Grenade", {signature:  "WEAP", formId:  "0004DFE3", editorId:  "WorkshopVertibirdGrenade"});
weapons.set("Ultracite Gatling Laser", {signature:  "WEAP", formId:  "002EF66E", editorId:  "Ultracite_GatlingLaser"});
weapons.set("Polly's Assaultron Head", {signature:  "WEAP", formId:  "0041A39C", editorId:  "W05_MQ_003P_Muscle_PollyAssaultronHead"});
weapons.set("Floater Gnasher Grenade", {signature:  "WEAP", formId:  "00592EA9", editorId:  "FloaterGnasherGrenade"});
weapons.set("Floater Freezer Grenade", {signature:  "WEAP", formId:  "00592EAB", editorId:  "FloaterFreezerGrenade"});
weapons.set("Blackened Combat Dagger", {signature:  "WEAP", formId:  "000913CA", editorId:  "Knife"});
weapons.set("Artillery Smoke Grenade", {signature:  "WEAP", formId:  "0012E2CA", editorId:  "WorkshopArtillerySmokeFlare"});
weapons.set("Target Seeking Fat Man", {signature:  "WEAP", formId:  "000BD56F", editorId:  "Fatman"});
weapons.set("Tactical Combat Dagger", {signature:  "WEAP", formId:  "000913CA", editorId:  "Knife"});
weapons.set("Single Action Revolver", {signature:  "WEAP", formId:  "001C7A69", editorId:  "SingleActionRevolver"});
weapons.set("Mechanic's Best Friend", {signature:  "WEAP", formId:  "0042B0D1", editorId:  "Survival_PipeWrench_MechanicsBestFriend"});
weapons.set("HalluciGen Gas Grenade", {signature:  "WEAP", formId:  "000E98E5", editorId:  "HalluciGenGrenade"});
weapons.set("Grognak's Hockey Stick", {signature:  "WEAP", formId:  "005A5316", editorId:  "ATX_Grognak_HockeyStick"});
weapons.set("Floater Flamer Grenade", {signature:  "WEAP", formId:  "00592EA7", editorId:  "FloaterFlamerGrenade"});
weapons.set("Crackle Fireworks Mine", {signature:  "WEAP", formId:  "0055C52B", editorId:  "ATX_Firework_Mine_Crackle"});
weapons.set("Compound Bow Explosive", {signature:  "WEAP", formId:  "00591255", editorId:  "TempCompoundBowExplosive"});
weapons.set("Turbo-Fert Fertilizer", {signature:  "WEAP", formId:  "00592F7A", editorId:  "W05_TurboFertFertilizer"});
weapons.set("Radstag Hunting Knife", {signature:  "WEAP", formId:  "000913CA", editorId:  "Knife"});
weapons.set("ProSnap Deluxe Camera", {signature:  "WEAP", formId:  "0046F481", editorId:  "Camera_SnapMatic"});
weapons.set("Pretty Floral Bouquet", {signature:  "WEAP", formId:  "0045C491", editorId:  "P01E_Heart_Bouquet"});
weapons.set("Plasma Grenade Bundle", {signature:  "WEAP", formId:  "00554607", editorId:  "PlasmaBundleGrenade"});
weapons.set("Orbital Strike Beacon", {signature:  "WEAP", formId:  "000073F8", editorId:  "PulseGrenadeOrbital"});
weapons.set("Grelok Sorcerer Staff", {signature:  "WEAP", formId:  "00183FCD", editorId:  "DN160_GrognakAxe"});
weapons.set("Fragmentation Grenade", {signature:  "WEAP", formId:  "000EEBED", editorId:  "fragGrenade"});
weapons.set("Flechette Harpoon Gun", {signature:  "WEAP", formId:  "001109CF", editorId:  "DLC03_HarpoonGun"});
weapons.set("Double-Barrel Shotgun", {signature:  "WEAP", formId:  "00092217", editorId:  "DoubleBarrelShotgun"});
weapons.set("Compound Bow Firework", {signature:  "WEAP", formId:  "00591254", editorId:  "TempCompoundBowFirework"});
weapons.set("Chinese Officer Sword", {signature:  "WEAP", formId:  "00147BE4", editorId:  "ChineseOfficerSword"});
weapons.set("Auto Grenade Launcher", {signature:  "WEAP", formId:  "00182634", editorId:  "AutoGrenadeLauncher"});
weapons.set("The V.A.T.S. Unknown", {signature:  "WEAP", formId:  "005A21A2", editorId:  "W05_COMP_Astronaut_AlienBlaster_QuestReward"});
weapons.set("Old Guard's 10mm SMG", {signature:  "WEAP", formId:  "0059A82F", editorId:  "W05_MQS_203P_10mmSMG"});
weapons.set("Nuka Quantum Grenade", {signature:  "WEAP", formId:  "00113D0F", editorId:  "DLC04_NukaQuantumGrenade"});
weapons.set("Mr. Handy Buzz Blade", {signature:  "WEAP", formId:  "0010EC97", editorId:  "DLC01MrHandyBuzzBlade"});
weapons.set("M79 Grenade Launcher", {signature:  "WEAP", formId:  "0008F0EF", editorId:  "M79"});
weapons.set("Green Fireworks Mine", {signature:  "WEAP", formId:  "005566DD", editorId:  "Firework_Mine_Green"});
weapons.set("Compound Bow Flaming", {signature:  "WEAP", formId:  "00591257", editorId:  "TempCompoundBowFlaming"});
weapons.set("Whistle in the Dark", {signature:  "WEAP", formId:  "0042B0D2", editorId:  "Survival_AssaultRifle_WhistleInTheDark"});
weapons.set("Unstoppable Monster", {signature:  "WEAP", formId:  "0042B0CE", editorId:  "Survival_DeathclawGauntlet_UnstoppableMonster"});
weapons.set("Revolutionary Sword", {signature:  "WEAP", formId:  "00143AB5", editorId:  "RevolutionarySword"});
weapons.set("Pump Action Shotgun", {signature:  "WEAP", formId:  "0012DBB3", editorId:  "PumpActionShotgun"});
weapons.set("Protest Sign - Jobs", {signature:  "WEAP", formId:  "002D4837", editorId:  "ProtestSign02"});
weapons.set("Orbital Scan Beacon", {signature:  "WEAP", formId:  "00052213", editorId:  "EN02_ScanGrenade"});
weapons.set("Mole Miner Gauntlet", {signature:  "WEAP", formId:  "00012E73", editorId:  "MoleMinerGauntlet"});
weapons.set("Medical Malpractice", {signature:  "WEAP", formId:  "00403022", editorId:  "Survival_44_MedicalMalpractice"});
weapons.set("Grognak Battle Mace", {signature:  "WEAP", formId:  "000FF964", editorId:  "SuperSledge"});
weapons.set("Compound Bow Poison", {signature:  "WEAP", formId:  "00591256", editorId:  "TempCompoundBowPoison"});
weapons.set("Compound Bow Plasma", {signature:  "WEAP", formId:  "00591258", editorId:  "TempCompoundBowPlasma"});
weapons.set("Combat Sniper Rifle", {signature:  "WEAP", formId:  "000DF42E", editorId:  "CombatRifle"});
weapons.set("Blue Fireworks Mine", {signature:  "WEAP", formId:  "005566DC", editorId:  "Firework_Mine_Blue"});
weapons.set("Black Powder Pistol", {signature:  "WEAP", formId:  "00003AAC", editorId:  "Blackpowder_Pistol"});
weapons.set("Acceptable Overkill", {signature:  "WEAP", formId:  "0042B0CF", editorId:  "Survival_LaserGun_AcceptableOverkill"});
weapons.set("10mm Submachine Gun", {signature:  "WEAP", formId:  "0010DB0F", editorId:  "10mmSMG"});
weapons.set("Sheepsquatch Staff", {signature:  "WEAP", formId:  "00455847", editorId:  "SheepsquatchStaff"});
weapons.set("Sheepsquatch Shard", {signature:  "WEAP", formId:  "0045FF61", editorId:  "SheepsquatchShard"});
weapons.set("Red Fireworks Mine", {signature:  "WEAP", formId:  "005566DE", editorId:  "Firework_Mine_Red"});
weapons.set("Lever Action Rifle", {signature:  "WEAP", formId:  "00110E32", editorId:  "DLC03_LeverGun"});
weapons.set("Incendiary Grenade", {signature:  "WEAP", formId:  "00554605", editorId:  "IncendiaryGrenade"});
weapons.set("Hooked Harpoon Gun", {signature:  "WEAP", formId:  "001109CF", editorId:  "DLC03_HarpoonGun"});
weapons.set("Gold Combat Dagger", {signature:  "WEAP", formId:  "000913CA", editorId:  "Knife"});
weapons.set("Fragmentation Mine", {signature:  "WEAP", formId:  "000E56C2", editorId:  "fragMine"});
weapons.set("Disorderly Conduct", {signature:  "WEAP", formId:  "0042B0CB", editorId:  "Survival_Baton_DisorderlyConduct"});
weapons.set("Deathclaw Gauntlet", {signature:  "WEAP", formId:  "000D8576", editorId:  "DeathclawGauntlet"});
weapons.set("Commander's Charge", {signature:  "WEAP", formId:  "0042B0D4", editorId:  "Survival_RevolutionarySword_CommandersCharge"});
weapons.set("Black Powder Rifle", {signature:  "WEAP", formId:  "00091BB4", editorId:  "BlackPowder_Rifle"});
weapons.set("50 Cal Machine Gun", {signature:  "WEAP", formId:  "0003A0D4", editorId:  "50CalMachineGun"});
weapons.set("Sheepsquatch Club", {signature:  "WEAP", formId:  "00455839", editorId:  "SheepSquatchClub"});
weapons.set("Salt of the Earth", {signature:  "WEAP", formId:  "0042B0D3", editorId:  "Survival_DoubleBarrelShotgun_SaltOfTheEarth"});
weapons.set("Multi-Purpose Axe", {signature:  "WEAP", formId:  "002A0405", editorId:  "WoodCuttingAxe"});
weapons.set("Light Machine Gun", {signature:  "WEAP", formId:  "0007CAB1", editorId:  "MG42"});
weapons.set("Experimental MIRV", {signature:  "WEAP", formId:  "000BD56F", editorId:  "Fatman"});
weapons.set("Expensive Perfume", {signature:  "WEAP", formId:  "0045C49A", editorId:  "P01E_Heart_PerfumeGrenade"});
weapons.set("Cryogenic Grenade", {signature:  "WEAP", formId:  "000FF21D", editorId:  "CryoGrenade"});
weapons.set("CrossbowExplosive", {signature:  "WEAP", formId:  "0059124E", editorId:  "TempcrossbowExplosive"});
weapons.set("Compound Bow Cryo", {signature:  "WEAP", formId:  "00591253", editorId:  "TempCompoundBowCryo"});
weapons.set("Western Revolver", {signature:  "WEAP", formId:  "00113D6A", editorId:  "DLC04_Revolver"});
weapons.set("Turret Laser Gun", {signature:  "WEAP", formId:  "001142B1", editorId:  "DLC04_TurretMountedLaserGunSpaceBlue"});
weapons.set("Tourist's Camera", {signature:  "WEAP", formId:  "004845B1", editorId:  "DELETED_Camera_P01C_Bucket"});
weapons.set("The Black Knight", {signature:  "WEAP", formId:  "004FD64B", editorId:  "ATX_Sten"});
weapons.set("Shepherd's Crook", {signature:  "WEAP", formId:  "0045582B", editorId:  "ShepherdsCrook"});
weapons.set("Resolute Veteran", {signature:  "WEAP", formId:  "0042B0CC", editorId:  "Survival_GatlingGun_ResoluteVeteran"});
weapons.set("Pipe Bolt-Action", {signature:  "WEAP", formId:  "0014831A", editorId:  "PipeBoltAction"});
weapons.set("Molotov Cocktail", {signature:  "WEAP", formId:  "0010C3C6", editorId:  "MolotovCocktail"});
weapons.set("Missile Launcher", {signature:  "WEAP", formId:  "0003F6F8", editorId:  "MissileLauncher"});
weapons.set("Meteoritic Sword", {signature:  "WEAP", formId:  "00111AB6", editorId:  "MTR05_MeteoriteSword"});
weapons.set("CrossbowFirework", {signature:  "WEAP", formId:  "0059124F", editorId:  "TempcrossbowFirework"});
weapons.set("Baseball Grenade", {signature:  "WEAP", formId:  "00107BD6", editorId:  "BaseballGrenade"});
weapons.set("Assaultron Blade", {signature:  "WEAP", formId:  "0010F3F2", editorId:  "DLC01_AssaultronBlade"});
weapons.set("Ultracite Laser", {signature:  "WEAP", formId:  "00186171", editorId:  "UltraciteLaserGun"});
weapons.set("Trail Fireworks", {signature:  "WEAP", formId:  "005566D6", editorId:  "ATX_Firework_Mine_Trails"});
weapons.set("The Action Hero", {signature:  "WEAP", formId:  "00403025", editorId:  "Survival_50CalMachineGun_TheActionHero"});
weapons.set("Rose's Syringer", {signature:  "WEAP", formId:  "003E1331", editorId:  "MTNM01_PipeSyringer_Karma"});
weapons.set("Pumpkin Grenade", {signature:  "WEAP", formId:  "00045884", editorId:  "Grenade_Pumpkin"});
weapons.set("Fission Grenade", {signature:  "WEAP", formId:  "005CF0A0", editorId:  "LGN_NuclearProliferator_Weapon"});
weapons.set("Dynamite Bundle", {signature:  "WEAP", formId:  "0055C15A", editorId:  "DynamiteBundleGrenade"});
weapons.set("CrossbowFlaming", {signature:  "WEAP", formId:  "00591250", editorId:  "TempcrossbowFlaming"});
weapons.set("Blade of Bastet", {signature:  "WEAP", formId:  "0039C6C8", editorId:  "MoM_BladeOfBastet"});
weapons.set("Throwing Knife", {signature:  "WEAP", formId:  "003879A3", editorId:  "Throwing_Knife"});
weapons.set("Submachine Gun", {signature:  "WEAP", formId:  "0015B043", editorId:  "SubmachineGun"});
weapons.set("Remote Grenade", {signature:  "WEAP", formId:  "00554606", editorId:  "RemoteGrenade"});
weapons.set("Plasma Grenade", {signature:  "WEAP", formId:  "0010A33D", editorId:  "PlasmaGrenade"});
weapons.set("Pilgrim Musket", {signature:  "WEAP", formId:  "0059D52D", editorId:  "Pilgrim_Musket"});
weapons.set("Pearly Peepers", {signature:  "WEAP", formId:  "003F7F81", editorId:  "P01B_Mini_Robot01_Binoculars"});
weapons.set("Orbital Strike", {signature:  "WEAP", formId:  "004E42A1", editorId:  "EN02_OrbitalStrikeWeapon"});
weapons.set("Gatling Plasma", {signature:  "WEAP", formId:  "0001EC47", editorId:  "GatlingPlasma"});
weapons.set("Explosive Bait", {signature:  "WEAP", formId:  "00450366", editorId:  "MTNM01_BaitMine_Grenade"});
weapons.set("Enclave Plasma", {signature:  "WEAP", formId:  "002FD97A", editorId:  "Enclave_PlasmaGun"});
weapons.set("Cultist Dagger", {signature:  "WEAP", formId:  "0008E015", editorId:  "CultistDagger"});
weapons.set("CrossbowPoison", {signature:  "WEAP", formId:  "00591252", editorId:  "TempcrossbowPoison"});
weapons.set("CrossbowPlasma", {signature:  "WEAP", formId:  "00591251", editorId:  "TempcrossbowPlasma"});
weapons.set("Croquet Mallet", {signature:  "WEAP", formId:  "00498710", editorId:  "ATX_CroquetMallet"});
weapons.set("Croquet Mallet", {signature:  "WEAP", formId:  "000E7AB9", editorId:  "Sledgehammer"});
weapons.set("Commie Whacker", {signature:  "WEAP", formId:  "0011475B", editorId:  "DLC04_CommieWhacker"});
weapons.set("Combat Shotgun", {signature:  "WEAP", formId:  "0014831C", editorId:  "CombatShotgun"});
weapons.set("Camden Whacker", {signature:  "WEAP", formId:  "002BA1D9", editorId:  "CamdenWhackerWeapon"});
weapons.set("Turkey Ripper", {signature:  "WEAP", formId:  "0059561C", editorId:  "ATX_TurkeyRipper"});
weapons.set("The Quick Fix", {signature:  "WEAP", formId:  "00403026", editorId:  "Survival_Switchblade_TheQuickFix"});
weapons.set("The Guarantee", {signature:  "WEAP", formId:  "00403024", editorId:  "Survival_Fatman_TheGuarantee"});
weapons.set("Sound Grenade", {signature:  "WEAP", formId:  "0004E5F5", editorId:  "RESPSoundGrenade"});
weapons.set("Sole Survivor", {signature:  "WEAP", formId:  "00403023", editorId:  "Survival_LeverGun_SoleSurvivor"});
weapons.set("Smoke Grenade", {signature:  "WEAP", formId:  "00467FC6", editorId:  "SmokeGrenade"});
weapons.set("Pulse Grenade", {signature:  "WEAP", formId:  "000FF21F", editorId:  "PulseGrenade"});
weapons.set("Plasma Caster", {signature:  "WEAP", formId:  "0055C166", editorId:  "PlasmaCaster"});
weapons.set("Pipe Revolver", {signature:  "WEAP", formId:  "0014831B", editorId:  "PipeRevolver"});
weapons.set("Hunting Rifle", {signature:  "WEAP", formId:  "0004F46A", editorId:  "HuntingRifle"});
weapons.set("Grognak's Axe", {signature:  "WEAP", formId:  "00183FCD", editorId:  "DN160_GrognakAxe"});
weapons.set("Grant's Saber", {signature:  "WEAP", formId:  "00357FBD", editorId:  "MoM02B_HistoricSword"});
weapons.set("Gauss Shotgun", {signature:  "WEAP", formId:  "0055C150", editorId:  "gaussshotgun"});
weapons.set("Gauss Minigun", {signature:  "WEAP", formId:  "0055C151", editorId:  "GaussMinigun"});
weapons.set("Gatling Laser", {signature:  "WEAP", formId:  "000E27BC", editorId:  "GatlingLaser"});
weapons.set("GasTrap Dummy", {signature:  "WEAP", formId:  "000001F6", editorId:  "GasTrapDummy"});
weapons.set("Garden Trowel", {signature:  "WEAP", formId:  "005576CA", editorId:  "ATX_Weapon_Melee_GardenTrowel"});
weapons.set("Cultist Blade", {signature:  "WEAP", formId:  "0005A937", editorId:  "CultistBlade"});
weapons.set("Crushing Blow", {signature:  "WEAP", formId:  "00403021", editorId:  "Survival_M79_CrushingBlow"});
weapons.set("Combat Dagger", {signature:  "WEAP", formId:  "000913CA", editorId:  "Knife"});
weapons.set("Assault Rifle", {signature:  "WEAP", formId:  "0000463F", editorId:  "AssaultRifle"});
weapons.set("Ancient Blade", {signature:  "WEAP", formId:  "002C3EC7", editorId:  "MTR05_ChineseOfficerSword"});
weapons.set("Alien Blaster", {signature:  "WEAP", formId:  "000FF995", editorId:  "AlienBlaster"});
weapons.set("Walking Cane", {signature:  "WEAP", formId:  "000FDC7D", editorId:  "WalkingCane"});
weapons.set("Vox Syringer", {signature:  "WEAP", formId:  "0050CA2C", editorId:  "MTNS05_PipeSyringer_Vox"});
weapons.set("Voice of Set", {signature:  "WEAP", formId:  "0039C6C9", editorId:  "MoM_VoiceOfSet_44"});
weapons.set("Super Sledge", {signature:  "WEAP", formId:  "000FF964", editorId:  "SuperSledge"});
weapons.set("Sniper Rifle", {signature:  "WEAP", formId:  "0004F46A", editorId:  "HuntingRifle"});
weapons.set("Sledgehammer", {signature:  "WEAP", formId:  "000E7AB9", editorId:  "Sledgehammer"});
weapons.set("Recon Imager", {signature:  "WEAP", formId:  "00548794", editorId:  "Camera_Disposable"});
weapons.set("Nuka Grenade", {signature:  "WEAP", formId:  "000E5750", editorId:  "nukaGrenade"});
weapons.set("Meat Cleaver", {signature:  "WEAP", formId:  "005532B4", editorId:  "MeatCleaver"});
weapons.set("Guitar Sword", {signature:  "WEAP", formId:  "0000DC56", editorId:  "GuitarSword"});
weapons.set("Gauss Pistol", {signature:  "WEAP", formId:  "0054A165", editorId:  "GaussPistol"});
weapons.set("CrossbowCryo", {signature:  "WEAP", formId:  "0059124D", editorId:  "TempcrossbowCryo"});
weapons.set("Compound Bow", {signature:  "WEAP", formId:  "00013CE9", editorId:  "CompoundBow"});
weapons.set("Combat Rifle", {signature:  "WEAP", formId:  "000DF42E", editorId:  "CombatRifle"});
weapons.set("Combat Knife", {signature:  "WEAP", formId:  "000913CA", editorId:  "Knife"});
weapons.set("Boxing Glove", {signature:  "WEAP", formId:  "0016498F", editorId:  "BoxingGlove"});
weapons.set("Baseball Bat", {signature:  "WEAP", formId:  "0008E736", editorId:  "BaseballBat"});
weapons.set("The Invader", {signature:  "WEAP", formId:  "00559C99", editorId:  "atx_alienprobeDUPLICATE000"});
weapons.set("Switchblade", {signature:  "WEAP", formId:  "000FDC81", editorId:  "Switchblade"});
weapons.set("Slug Buster", {signature:  "WEAP", formId:  "005A366E", editorId:  "W05_MQR_205P_PlasmaGun"});
weapons.set("Rolling Pin", {signature:  "WEAP", formId:  "00142FAB", editorId:  "RollingPin"});
weapons.set("Plasma Mine", {signature:  "WEAP", formId:  "0010A342", editorId:  "PlasmaMine"});
weapons.set("Pipe Wrench", {signature:  "WEAP", formId:  "000D83BF", editorId:  "PipeWrench"});
weapons.set("Paddle Ball", {signature:  "WEAP", formId:  "001129CD", editorId:  "DLC04_PaddleBall"});
weapons.set("Night Light", {signature:  "WEAP", formId:  "0042B0CD", editorId:  "Survival_LightningGun_NightLight"});
weapons.set("Harpoon Gun", {signature:  "WEAP", formId:  "001109CF", editorId:  "DLC03_HarpoonGun"});
weapons.set("Gauss Rifle", {signature:  "WEAP", formId:  "000D1EB0", editorId:  "GaussRifle"});
weapons.set("Gatling Gun", {signature:  "WEAP", formId:  "00011BF6", editorId:  "GatlingGun"});
weapons.set("Death Tambo", {signature:  "WEAP", formId:  "0000DC55", editorId:  "DeathTambo"});
weapons.set("Candy-Claws", {signature:  "WEAP", formId:  "00012E73", editorId:  "MoleMinerGauntlet"});
weapons.set("Bug Grenade", {signature:  "WEAP", formId:  "003FBBA1", editorId:  "D01C_BugGrenade"});
weapons.set("Bowie Knife", {signature:  "WEAP", formId:  "000311DE", editorId:  "BowieKnife"});
weapons.set("Bone Hammer", {signature:  "WEAP", formId:  "003643D9", editorId:  "Bonehammer"});
weapons.set("Wiffle Bat", {signature:  "WEAP", formId:  "0008E736", editorId:  "BaseballBat"});
weapons.set("The Gutter", {signature:  "WEAP", formId:  "003F5E94", editorId:  "P01B_Burrows_AssaultronBlade"});
weapons.set("The Dragon", {signature:  "WEAP", formId:  "00046946", editorId:  "BlackPowder_Rifle_Dragon"});
weapons.set("Tenderizer", {signature:  "WEAP", formId:  "00553295", editorId:  "MeatTenderizer"});
weapons.set("Slay Bells", {signature:  "WEAP", formId:  "0000DC55", editorId:  "DeathTambo"});
weapons.set("Shishkebab", {signature:  "WEAP", formId:  "000FA2FB", editorId:  "Shishkebab"});
weapons.set("Pulse Mine", {signature:  "WEAP", formId:  "0010A344", editorId:  "PulseMine"});
weapons.set("Power Fist", {signature:  "WEAP", formId:  "0011B336", editorId:  "PowerFist"});
weapons.set("Kingfisher", {signature:  "WEAP", formId:  "0042B0D0", editorId:  "Survival_HarpoonGun_Kingfisher"});
weapons.set("Final Word", {signature:  "WEAP", formId:  "005A21E4", editorId:  "W05_COMP_Beckett_50CalMachineGun_QuestReward"});
weapons.set("Cattleprod", {signature:  "WEAP", formId:  "0055C153", editorId:  "Cattleprod"});
weapons.set("Candy Cane", {signature:  "WEAP", formId:  "000FDC7D", editorId:  "WalkingCane"});
weapons.set("Broadsider", {signature:  "WEAP", formId:  "000FD11B", editorId:  "Broadsider"});
weapons.set("Bone Tambo", {signature:  "WEAP", formId:  "00573F01", editorId:  "BoneTambo"});
weapons.set("Blast Mine", {signature:  "WEAP", formId:  "003B2626", editorId:  "SFZ14_Bomb_BlastMine"});
weapons.set("Binoculars", {signature:  "WEAP", formId:  "00002045", editorId:  "binoculars"});
weapons.set("Tire Iron", {signature:  "WEAP", formId:  "00185D25", editorId:  "TireIron"});
weapons.set("The Fixer", {signature:  "WEAP", formId:  "0046D2A1", editorId:  "CombatRifle_Fixer"});
weapons.set("Ski Sword", {signature:  "WEAP", formId:  "000360CF", editorId:  "SkiSword"});
weapons.set("Pole Hook", {signature:  "WEAP", formId:  "00110771", editorId:  "DLC03_PoleHook"});
weapons.set("Pitchfork", {signature:  "WEAP", formId:  "0003A1D1", editorId:  "Pitchfork"});
weapons.set("Nuke Mine", {signature:  "WEAP", formId:  "0010A340", editorId:  "NukeMine"});
weapons.set("Meat Hook", {signature:  "WEAP", formId:  "00111562", editorId:  "DLC03_MeatHook"});
weapons.set("Lead Pipe", {signature:  "WEAP", formId:  "000FC9C3", editorId:  "LeadPipe"});
weapons.set("Golf Club", {signature:  "WEAP", formId:  "00073677", editorId:  "GolfClub"});
weapons.set("Gamma Gun", {signature:  "WEAP", formId:  "000DDB7C", editorId:  "GammaGun"});
weapons.set("Flare Gun", {signature:  "WEAP", formId:  "001025AC", editorId:  "FlareGun"});
weapons.set("Cryolator", {signature:  "WEAP", formId:  "00171B2B", editorId:  "Cryolator"});
weapons.set("Cryo Mine", {signature:  "WEAP", formId:  "0010C669", editorId:  "CryoMine"});
weapons.set("Bone Club", {signature:  "WEAP", formId:  "003643DA", editorId:  "BoneClub"});
weapons.set("War Drum", {signature:  "WEAP", formId:  "0000DC57", editorId:  "WarDrum"});
weapons.set("Tomahawk", {signature:  "WEAP", formId:  "000042F2", editorId:  "Tomahawk"});
weapons.set("Syringer", {signature:  "WEAP", formId:  "0014D09E", editorId:  "PipeSyringer"});
weapons.set("Pool Cue", {signature:  "WEAP", formId:  "000FA3E8", editorId:  "PoolCue"});
weapons.set("Napalmer", {signature:  "WEAP", formId:  "000E5881", editorId:  "Flamer"});
weapons.set("Knuckles", {signature:  "WEAP", formId:  "0005524B", editorId:  "Knuckles"});
weapons.set("Handmade", {signature:  "WEAP", formId:  "00113854", editorId:  "DLC04_HandMadeGun"});
weapons.set("Gauntlet", {signature:  "WEAP", formId:  "0055C156", editorId:  "Gauntlet"});
weapons.set("Fire Axe", {signature:  "WEAP", formId:  "0012B793", editorId:  "Fire_Axe"});
weapons.set("Dynamite", {signature:  "WEAP", formId:  "0055C159", editorId:  "DynamiteGrenade"});
weapons.set("Crossbow", {signature:  "WEAP", formId: "00055463", editorId: "crossbow"});
weapons.set("Chainsaw", {signature:  "WEAP", formId:  "0004DF01", editorId:  "Chainsaw_76"});
weapons.set("Bear Arm", {signature:  "WEAP", formId:  "003F06E2", editorId:  "BearArm"});
weapons.set("Auto Axe", {signature:  "WEAP", formId:  "00590287", editorId:  "AutoAxe_NONPLAYABLE"});
weapons.set("Swatter", {signature:  "WEAP", formId:  "0008E736", editorId:  "BaseballBat"});
weapons.set("Stanley", {signature:  "WEAP", formId:  "00183FCD", editorId:  "DN160_GrognakAxe"});
weapons.set("Railway", {signature:  "WEAP", formId:  "000FE268", editorId:  "RailwayRifle"});
weapons.set("Pickaxe", {signature:  "WEAP", formId:  "00002840", editorId:  "Pickaxe"});
weapons.set("Minigun", {signature:  "WEAP", formId:  "0001F669", editorId:  "Minigun"});
weapons.set("Machete", {signature:  "WEAP", formId:  "00033FE0", editorId:  "Machete"});
weapons.set("Hatchet", {signature:  "WEAP", formId:  "0010D808", editorId:  "Hatchet"});
weapons.set("Fat Man", {signature:  "WEAP", formId:  "000BD56F", editorId:  "Fatman"});
weapons.set("Sickle", {signature:  "WEAP", formId:  "000B3293", editorId:  "Sickle"});
weapons.set("Shovel", {signature:  "WEAP", formId:  "004E2E20", editorId:  "Shovel"});
weapons.set("Ripper", {signature:  "WEAP", formId:  "000FA2F6", editorId:  "Ripper"});
weapons.set("Radium", {signature:  "WEAP", formId:  "00110D41", editorId:  "RadiumRifle"});
weapons.set("Plasma", {signature:  "WEAP", formId:  "00100AE9", editorId:  "PlasmaGun"});
weapons.set("Nailer", {signature:  "WEAP", formId:  "00342521", editorId:  "MTNS04_NailerSword"});
weapons.set("Flamer", {signature:  "WEAP", formId:  "000E5881", editorId:  "Flamer"});
weapons.set("Tesla", {signature:  "WEAP", formId:  "0010F0EC", editorId:  "DLC01LightningGun"});
weapons.set("Spear", {signature:  "WEAP", formId:  "002D473A", editorId:  "Spear"});
weapons.set("Laser", {signature:  "WEAP", formId:  "0009983B", editorId:  "LaserGun"});
weapons.set("Flare", {signature:  "WEAP", formId:  "0055C157", editorId:  "FlareGrenade"});
weapons.set("Dross", {signature:  "WEAP", formId:  "0031FAEA", editorId:  "MTR04_DrossThrownItem"});
weapons.set("Drill", {signature:  "WEAP", formId:  "00081DD5", editorId:  "Drill"});
weapons.set("Board", {signature:  "WEAP", formId:  "0005C250", editorId:  "Board"});
weapons.set("Baton", {signature:  "WEAP", formId:  "0008C14D", editorId:  "Baton"});
weapons.set("Pipe", {signature:  "WEAP", formId:  "00024F55", editorId:  "PipeGun"});
weapons.set("10mm", {signature:  "WEAP", formId:  "00004822", editorId:  "10mm"});
weapons.set("Bow", {signature:  "WEAP", formId:  "0055C152", editorId:  "RegularBow"});
weapons.set(".44", {signature:  "WEAP", formId:  "000CE97D", editorId:  "44"});

let names = [
	"Cryogenic Grenade",
	"Floater Freezer Grenade",
	"Fragmentation Grenade",
	"Molotov Cocktail",
	"Plasma Grenade",
	"ProSnap Deluxe Camera",
	"Vox Syringer",
	"_B25 Pipe",
	"_Q2515 Combat Shotgun",
	"_Vampire's Power Fist",
	"Artillery Smoke Grenade",
	"Bloodied Chinese Officer Sword",
	"Bloodied Shovel",
	"Zealot's Cryolator",
	"_B Gauss Minigun",
	"_I Gauss Pistol",
	"_V 50 Gatling Laser",
	"Baseball Grenade",
	"Cryo Mine",
	"Fragmentation Grenade",
	"Fragmentation Mine",
	"Plasma Mine",
	"ProSnap Deluxe Camera",
	"Pulse Mine",
	"_B Fat Man",
	"_B Gatling Plasma",
	"_B Missile Launcher",
	"_B Ultra Gatling Laser",
	"_I25 Minigun",
	"_V M79 Grenade Launcher",
	"Instigating Gatling Laser",
	"Vampire's  Combat Shotgun",
	"Binoculars",
	"Bloodied Single Action Revolver",
	"Cryogenic Grenade",
	"Fragmentation Grenade",
	"Fragmentation Mine",
	"Hunter's Single Action Revolver",
	"Molotov Cocktail",
	"Plasma Grenade",
	"Plasma Mine",
	"ProSnap Deluxe Camera",
	"Pulse Grenade",
	"Pulse Mine",
	"Rose's Syringer",
	"Troubleshooter's Salvaged Assaultron Head",
	"_B5090 Gauss Pistol",
	"_I1015 Gauss Pistol",
	"Anti-armor Marksman's Old Guard's 10mm SMG",
	"Instigating Short Hunting Rifle",
	"Medic's Gauss Pistol",
	"Mutant Slayer's Gauss Pistol",
	"Slug Buster",
	"Troubleshooter's Missile Launcher",
	"Ghoul Slayer's Pole Hook",
	"_B2525 The Fixer",
	"The V.A.T.S. Unknown",
	"Baseball Grenade",
	"Blade of Bastet",
	"Cryo Mine",
	"Cryogenic Grenade",
	"Fragmentation Grenade",
	"Fragmentation Mine",
	"Molotov Cocktail",
	"Plasma Grenade",
	"Pulse Grenade",
	"Pulse Mine",
	"Zealot's Security Baton",
	"_B Meat Hook",
	"Bloodied Short 10mm Submachine Gun",
	"Bloodied Short Assault Rifle",
	"Bloodied Switchblade",
	"Instigating Bone Hammer",
	"Instigating Fat Man",
	"Instigating Fat Man",
	"Instigating Short Western Revolver",
	"Junkie's Short Gamma Gun",
	"Stalker's Short Gatling Gun",
	"Zealot's Baseball Bat",
	"Zealot's Death Tambo",
	"Zealot's Missile Launcher",
	"_B Power Fist",
	"_V Boxing Glove",
	"Anti-armor Meat Hook",
	"Anti-armor Suppressed Gauss Rifle",
	"Berserker's Bone Hammer",
	"Berserker's Rolling Pin",
	"Berserker's Short Lever Action Rifle",
	"Berserker's Spear",
	"Blade of Bastet",
	"Blade of Bastet",
	"Bloodied Auto Grenade Launcher",
	"Bloodied Black Powder Rifle",
	"Bloodied Electrified Revolutionary Sword",
	"Bloodied Night-Vision Gauss Rifle",
	"Bloodied Recoil Compensated Cryolator",
	"Bloodied Scorch Killer's Submachine Gun",
	"Bloodied Short Combat Rifle",
	"Bloodied Suppressed Automatic Combat Rifle",
	"Executioner's Gauss Rifle",
	"Executioner's Scoped Lever Action Rifle",
	"Furious Auto Grenade Launcher",
	"Furious Cultist Dagger",
	"Furious Hatchet",
	"Furious Knuckles",
	"Furious Marksman's 10mm Submachine Gun",
	"Furious Meat Hook",
	"Furious Rolling Pin",
	"Furious Short Lever Action Rifle",
	"Ghoul Slayer's Death Tambo",
	"Ghoul Slayer's Meat Hook",
	"Instigating Combat Knife",
	"Instigating Combat Shotgun",
	"Instigating Electrified Mr. Handy Buzz Blade",
	"Instigating Shishkebab",
	"Instigating Short 10mm Submachine Gun",
	"Instigating Short 10mm Submachine Gun",
	"Instigating Short 10mm Submachine Gun",
	"Instigating Short Double-Barrel Shotgun",
	"Instigating Short Gatling Gun",
	"Instigating Short Western Revolver",
	"Instigating Spear",
	"Instigating Submachine Gun",
	"Instigating Tire Iron",
	"Junkie's Automatic Assault Rifle",
	"Junkie's Black Powder Rifle",
	"Junkie's Combat Knife",
	"Junkie's Pickaxe",
	"Junkie's Pipe Wrench",
	"Junkie's Security Baton",
	"Junkie's Short Gamma Gun",
	"Junkie's Ski Sword",
	"Meteoritic Sword",
	"Mutant Slayer's Switchblade",
	"Nocturnal Sledgehammer",
	"Nocturnal Submachine Gun",
	"Quad Pipe Revolver",
	"Quad Sharpshooter's Assault Rifle",
	"Quad Tactical Double-Barrel Shotgun",
	"Stalker's Crossbow",
	"Stalker's Scoped Gauss Rifle",
	"Stalker's Short Double-Barrel Shotgun",
	"Stalker's Spear",
	"Suppressor's Crossbow",
	"Suppressor's Mole Miner Gauntlet",
	"Suppressor's Ski Sword",
	"Suppressor's Tire Iron",
	"Suppressor's Walking Cane",
	"The Fixer",
	"The Gutter",
	"The Gutter",
	"The Tenderizer",
	"Troubleshooter's Lever Action Rifle",
	"Troubleshooter's Short Assault Rifle",
	"Two Shot Gatling Plasma",
	"Two Shot Gauss Rifle",
	"Two Shot M79 Grenade Launcher",
	"Two Shot Short Double-Barrel Shotgun",
	"Two Shot Short Gamma Gun",
	"Vampire's  50 Cal Machine Gun",
	"Vampire's  Black Powder Rifle",
	"Vampire's  Crossbow",
	"Vampire's  Short Gamma Gun",
	"Vampire's  Suppressed Pump Action Shotgun",
	"Vampire's Assaultron Blade",
	"Vampire's Bowie Knife",
	"Vampire's Chinese Officer Sword",
	"Vampire's Combat Knife",
	"Vampire's Knuckles",
	"Vampire's Large Deathclaw Gauntlet",
	"Vampire's Mr. Handy Buzz Blade",
	"Vampire's Pickaxe",
	"Vampire's Super Sledge",
	"Vampire's Switchblade",
	"Voice of Set",
	"Voice of Set",
	"Zealot's Minigun",
	"Zealot's Security Baton",
	"_LEG TS Tesla",
	"_LEG TS|E Gatling Laser",
	"Binoculars",
	"Flare",
	"Combat Knife",
	"Instigating Combat Shotgun",
	"Baseball Grenade",
	"Executioner's Machete",
	"Flare",
	"Fragmentation Grenade",
	"Fragmentation Mine",
	"Molotov Cocktail",
	"Suppressor's Hunting Rifle",
	"Fragmentation Mine",
	"Hatchet",
	"Plasma Grenade",
	"Pulse Mine",
	"Pumpkin Grenade",
	"Tactical Pipe Revolver"
];

function findId(name) {
	let pre = name.replace(preFilter, '').trim();
	if (weapons.has(pre)) {
		return weapons.get(pre);
	}
	let post = pre.replace(postFilter, '').trim();
	return weapons.get(post);
}

function run() {
	names.forEach((name) => {
		let t0 = performance.now()
		let id = findId(name);
		let t1 = performance.now()
		if (id == undefined) {
			log.textContent += `${((t1 - t0)*1000).toFixed(2)} us : ${name}: NOT_FOUND\n`;
		} else {
			log.textContent += `${((t1 - t0)*1000).toFixed(2)} us : ${name}: WEAP - Weapon [${id.formId}] <${id.editorId}>\n`;
		}
	});
}

const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      run();
  }, 200);
});

const form = document.querySelector('#test');
const out = document.querySelector('.test-out-contents');

form.addEventListener("submit", (f) => {
	let id = findId(form.querySelector('#in').value);
	if (id == undefined){
		out.textContent = 'NOT_FOUND';
	} else {
		out.textContent = `WEAP - Weapon [${id.formId}] <${id.editorId}>`;
	}
	f.preventDefault();
});
