import z from 'zod';
import { DOUGH_DEFINITIONS, SAUCE_DEFINITIONS, TOPPING_DEFINITIONS } from '../db/database/definitions';

const DoughOpts = DOUGH_DEFINITIONS.map(v => v.name);
const DoughOptionValidator = z.string().refine(v => DoughOpts.includes(v), 'Invalid dough!');

const SauceOpts = SAUCE_DEFINITIONS.map(v => v.name);
const SauceOptionValidator = z.string().refine(v => SauceOpts.includes(v), 'Invalid sauce!');

const ToppingOpts = TOPPING_DEFINITIONS.map(v => v.name);
const ToppingOptionValidator = z.string().refine(v => ToppingOpts.includes(v), 'Invalid topping!');

export {
    DoughOptionValidator,
    SauceOptionValidator,
    ToppingOptionValidator,
};