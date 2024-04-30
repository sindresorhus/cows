import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function cows() {
	return fs.readFileSync(path.join(__dirname, 'cows.txt'), 'utf8')
		.replace(/\n$/, '').split('\n\n\n');
}
