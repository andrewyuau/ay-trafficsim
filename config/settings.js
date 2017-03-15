/*******************************************************************************
 * Copyright (c) 2014 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *   http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *   Bryan Boyd - Initial implementation
 *   U. Siddiqui - Extended for traffic simulation
 *******************************************************************************/

var config = {
	iot_deviceType: "vehicle",     // TODO: replace with your deviceType
	iot_deviceOrg: "rzhkvn",             // TODO: replace with your IoT Foundation organization
	iot_deviceSet: [               // TODO: replace with your registered device(s)
		{ deviceId: "ABC", token: "iotvehicletoken" }
	],
	iot_apiKey: "a-rzhkvn-okig5sdsa6",    	// TODO: replace with the key for a generated API token
	iot_apiToken: "3DNnPJv@Veq*_-JtkW",  	// TODO: replace with the generated API token



	// these topics will be used by Geospatial Analytics
	notifyTopic: "iot-2/type/api/id/geospatial/cmd/geoAlert/fmt/json",
	inputTopic: "iot-2/type/vehicle/id/+/evt/telemetry/fmt/json",

	//
	// Traffic simulation
	//

	// Generated trafficAlerts will be published to this topic
	trafficAlertTopic: "iot-2/type/api/id/traffic/cmd/trafficAlert/fmt/json",
	// List of traffic zones will be published to this topic
	trafficZonesTopic: "iot-2/type/api/id/traffic/cmd/trafficZones/fmt/json",

};

try {
	module.exports = config;
} catch (e) { window.config = config; }
