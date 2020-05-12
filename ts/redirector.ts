/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {HEndpointGroup, HErrorStatusCode} from "@element-ts/hydrogen";
import {Link} from "@quik-link/core";
import {SiQuery} from "@element-ts/silicon";

export const redirector = new HEndpointGroup();

redirector.getDynamic(async (req, res) => {

	console.log("hhoijweoijwe oijwe oijwe");
	console.log(req.getHeaders().host);
	console.log(req.getHeaders()["user-agent"]);

	const linkId: string = req.getEndpoint();
	if (linkId.length !== 24) return res.err(HErrorStatusCode.NotFound, "Link does not exist.");
	const link: Link | undefined = await SiQuery.getObjectForId(Link, linkId);
	if (link === undefined) return res.err(HErrorStatusCode.NotFound, "Link does not exist.");
	const url: string | undefined = link.props.url;
	if (url === undefined) return res.err(HErrorStatusCode.NotFound, "Link does not exist.");

	await link.visit();
	res.redirect(url);

});