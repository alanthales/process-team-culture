import { workerData, parentPort } from "worker_threads";

const message = workerData;

parentPort.postMessage("processing:", message);

setTimeout(() => {
    parentPort.postMessage("finish job");
}, 10000);