import test from 'ava';
import m from '.';

test('main', t => {
	const cows = m();
	console.log('Cows:', cows.length);
	t.true(Array.isArray(cows));
	t.true(cows.length > 0);
});
