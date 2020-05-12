/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {HHTTPServer} from "@element-ts/hydrogen";
import {SiDatabase} from "@element-ts/silicon";
import {redirector} from "./redirector";
import {Logger} from "./Logger";

(async (): Promise<void> => {

	Logger.neon.setTitle("quik-link/redirector");

	await SiDatabase.init({
		database: "quiklink",
		address: "mongodb://localhost:27017",
		debug: true
	});

	new HHTTPServer(redirector, {debug: true}).start(3001);

})().catch((err: any) => console.error(err));

