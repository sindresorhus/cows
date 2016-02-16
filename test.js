import test from 'ava';
import m from './';

test(t => {
	const cows = m();
	t.true(Array.isArray(cows));
	t.true(cows.length > 0);
});
