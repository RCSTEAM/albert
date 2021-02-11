import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, k as validate_each_argument, v as validate_slots, e as element, t as text, l as space, c as claim_element, a as children, b as claim_text, f as detach_dev, m as claim_space, g as add_location, h as insert_dev, j as append_dev, r as set_data_dev, p as set_style, n as noop, q as destroy_each } from './client.39d4f272.js';

/* src/routes/projects/[slug].svelte generated by Svelte v3.32.0 */

const file = "src/routes/projects/[slug].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (76:4) {#each bom as component}
function create_each_block(ctx) {
	let p0;
	let t0_value = /*component*/ ctx[2].id + "";
	let t0;
	let t1;
	let p1;
	let t2_value = /*component*/ ctx[2].name + "";
	let t2;
	let t3;
	let p2;
	let t4_value = /*component*/ ctx[2].value + "";
	let t4;
	let t5;
	let t6_value = /*component*/ ctx[2].unit + "";
	let t6;
	let t7;
	let p3;
	let t8_value = /*component*/ ctx[2].package + "";
	let t8;
	let t9;
	let p4;
	let t10_value = /*component*/ ctx[2].count + "";
	let t10;

	const block = {
		c: function create() {
			p0 = element("p");
			t0 = text(t0_value);
			t1 = space();
			p1 = element("p");
			t2 = text(t2_value);
			t3 = space();
			p2 = element("p");
			t4 = text(t4_value);
			t5 = space();
			t6 = text(t6_value);
			t7 = space();
			p3 = element("p");
			t8 = text(t8_value);
			t9 = space();
			p4 = element("p");
			t10 = text(t10_value);
			this.h();
		},
		l: function claim(nodes) {
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, t0_value);
			p0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t2 = claim_text(p1_nodes, t2_value);
			p1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t4 = claim_text(p2_nodes, t4_value);
			t5 = claim_space(p2_nodes);
			t6 = claim_text(p2_nodes, t6_value);
			p2_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t8 = claim_text(p3_nodes, t8_value);
			p3_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			t10 = claim_text(p4_nodes, t10_value);
			p4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p0, file, 76, 4, 3796);
			add_location(p1, file, 77, 4, 3822);
			add_location(p2, file, 78, 4, 3850);
			add_location(p3, file, 79, 4, 3896);
			add_location(p4, file, 80, 4, 3927);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p0, anchor);
			append_dev(p0, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t4);
			append_dev(p2, t5);
			append_dev(p2, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t10);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*bom*/ 2 && t0_value !== (t0_value = /*component*/ ctx[2].id + "")) set_data_dev(t0, t0_value);
			if (dirty & /*bom*/ 2 && t2_value !== (t2_value = /*component*/ ctx[2].name + "")) set_data_dev(t2, t2_value);
			if (dirty & /*bom*/ 2 && t4_value !== (t4_value = /*component*/ ctx[2].value + "")) set_data_dev(t4, t4_value);
			if (dirty & /*bom*/ 2 && t6_value !== (t6_value = /*component*/ ctx[2].unit + "")) set_data_dev(t6, t6_value);
			if (dirty & /*bom*/ 2 && t8_value !== (t8_value = /*component*/ ctx[2].package + "")) set_data_dev(t8, t8_value);
			if (dirty & /*bom*/ 2 && t10_value !== (t10_value = /*component*/ ctx[2].count + "")) set_data_dev(t10, t10_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(p3);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(p4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(76:4) {#each bom as component}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let h1;
	let t0_value = /*project*/ ctx[0].name + "";
	let t0;
	let t1;
	let span;
	let t2;
	let t3_value = /*project*/ ctx[0].id + "";
	let t3;
	let t4;
	let p0;
	let t5_value = /*project*/ ctx[0].description + "";
	let t5;
	let t6;
	let h2;
	let t7;
	let t8;
	let div;
	let p1;
	let t9;
	let t10;
	let p2;
	let t11;
	let t12;
	let p3;
	let t13;
	let t14;
	let p4;
	let t15;
	let t16;
	let p5;
	let t17;
	let t18;
	let each_value = /*bom*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			span = element("span");
			t2 = text("Project#");
			t3 = text(t3_value);
			t4 = space();
			p0 = element("p");
			t5 = text(t5_value);
			t6 = space();
			h2 = element("h2");
			t7 = text("Bill of Materials");
			t8 = space();
			div = element("div");
			p1 = element("p");
			t9 = text("Component ID");
			t10 = space();
			p2 = element("p");
			t11 = text("Name/Description");
			t12 = space();
			p3 = element("p");
			t13 = text("Value");
			t14 = space();
			p4 = element("p");
			t15 = text("Package");
			t16 = space();
			p5 = element("p");
			t17 = text("Required");
			t18 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, t0_value);
			t1 = claim_space(h1_nodes);
			span = claim_element(h1_nodes, "SPAN", { style: true });
			var span_nodes = children(span);
			t2 = claim_text(span_nodes, "Project#");
			t3 = claim_text(span_nodes, t3_value);
			span_nodes.forEach(detach_dev);
			h1_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t5 = claim_text(p0_nodes, t5_value);
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t7 = claim_text(h2_nodes, "Bill of Materials");
			h2_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { style: true });
			var div_nodes = children(div);
			p1 = claim_element(div_nodes, "P", { style: true });
			var p1_nodes = children(p1);
			t9 = claim_text(p1_nodes, "Component ID");
			p1_nodes.forEach(detach_dev);
			t10 = claim_space(div_nodes);
			p2 = claim_element(div_nodes, "P", { style: true });
			var p2_nodes = children(p2);
			t11 = claim_text(p2_nodes, "Name/Description");
			p2_nodes.forEach(detach_dev);
			t12 = claim_space(div_nodes);
			p3 = claim_element(div_nodes, "P", { style: true });
			var p3_nodes = children(p3);
			t13 = claim_text(p3_nodes, "Value");
			p3_nodes.forEach(detach_dev);
			t14 = claim_space(div_nodes);
			p4 = claim_element(div_nodes, "P", { style: true });
			var p4_nodes = children(p4);
			t15 = claim_text(p4_nodes, "Package");
			p4_nodes.forEach(detach_dev);
			t16 = claim_space(div_nodes);
			p5 = claim_element(div_nodes, "P", { style: true });
			var p5_nodes = children(p5);
			t17 = claim_text(p5_nodes, "Required");
			p5_nodes.forEach(detach_dev);
			t18 = claim_space(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(span, "color", "gray");
			set_style(span, "font-size", "9pt");
			add_location(span, file, 64, 19, 3291);
			add_location(h1, file, 64, 0, 3272);
			add_location(p0, file, 66, 0, 3365);
			add_location(h2, file, 68, 0, 3395);
			set_style(p1, "font-weight", "bold");
			add_location(p1, file, 70, 4, 3534);
			set_style(p2, "font-weight", "bold");
			add_location(p2, file, 71, 4, 3583);
			set_style(p3, "font-weight", "bold");
			add_location(p3, file, 72, 4, 3636);
			set_style(p4, "font-weight", "bold");
			add_location(p4, file, 73, 4, 3678);
			set_style(p5, "font-weight", "bold");
			add_location(p5, file, 74, 4, 3722);
			set_style(div, "display", "grid");
			set_style(div, "grid-template-columns", "2fr 5fr 1fr 1fr 1fr");
			set_style(div, "font-size", "9pt");
			set_style(div, "grid-column-gap", "8pt");
			add_location(div, file, 69, 0, 3422);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			append_dev(h1, t1);
			append_dev(h1, span);
			append_dev(span, t2);
			append_dev(span, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, p1);
			append_dev(p1, t9);
			append_dev(div, t10);
			append_dev(div, p2);
			append_dev(p2, t11);
			append_dev(div, t12);
			append_dev(div, p3);
			append_dev(p3, t13);
			append_dev(div, t14);
			append_dev(div, p4);
			append_dev(p4, t15);
			append_dev(div, t16);
			append_dev(div, p5);
			append_dev(p5, t17);
			append_dev(div, t18);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*project*/ 1 && t0_value !== (t0_value = /*project*/ ctx[0].name + "")) set_data_dev(t0, t0_value);
			if (dirty & /*project*/ 1 && t3_value !== (t3_value = /*project*/ ctx[0].id + "")) set_data_dev(t3, t3_value);
			if (dirty & /*project*/ 1 && t5_value !== (t5_value = /*project*/ ctx[0].description + "")) set_data_dev(t5, t5_value);

			if (dirty & /*bom*/ 2) {
				each_value = /*bom*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

let projects = [
	{
		id: "1",
		name: "PDM Board",
		description: "low voltage power distribution board for the car"
	},
	{
		id: "2",
		name: "Segment PCB",
		description: "segment PCB for the accumilator."
	},
	{
		id: "3",
		name: "PCB Combination",
		description: "Mervin's PCB!!!"
	}
];

let projectToComponent = [
	{
		project: "1",
		component: "1k5R_res_0805",
		required: 3
	},
	{
		project: "1",
		component: "10UF_CAP_KEMETA",
		required: 10
	},
	{
		project: "1",
		component: "BTS443P_IC_TO252",
		required: 5
	},
	{
		project: "2",
		component: "1uf_cap_0805",
		required: 2
	},
	{
		project: "3",
		component: "bc817_tran_sot23",
		required: 8
	},
	{
		project: "3",
		component: "16PF_CAP_0805",
		required: 2
	},
	{
		project: "3",
		component: "2K2R_RES_0805",
		required: 5
	}
];

let components = [
	// 10UF_CAP_0805
	{
		id: "1UF_CAP_0805",
		type: "capacitor",
		name: "1uF Cap 0805",
		value: 1,
		unit: "uF",
		package: "0805",
		count: 100
	},
	{
		id: "0.1UF_CAP_0805",
		type: "capacitor",
		name: "0.1uF Cap 0805",
		value: 0.1,
		unit: "uF",
		package: "0805",
		count: 100
	},
	{
		id: "4.7UF_CAP_0805",
		type: "capacitor",
		name: "4.7uF Cap 0805",
		value: 4.7,
		unit: "uF",
		package: "0805",
		count: 100
	},
	{
		id: "16PF_CAP_0805",
		type: "capacitor",
		name: "16pF Cap 0805",
		value: 16,
		unit: "pF",
		package: "0805",
		count: 100
	},
	{
		id: "20UF_CAP_KEMETA",
		type: "capacitor",
		name: "20uF Cap KEMET A",
		value: 20,
		unit: "uF",
		package: "KEMET A",
		count: 100
	},
	{
		id: "10UF_CAP_KEMETA",
		type: "capacitor",
		name: "10uF Cap KEMET A",
		value: 10,
		unit: "uF",
		package: "KEMET A",
		count: 100
	},
	// 1K5R_RES_0805
	{
		id: "1K5R_RES_0805",
		type: "resistor",
		name: "1K5R Resistor 0805",
		value: 1500,
		unit: "R",
		package: "0805",
		count: 100
	},
	{
		id: "330R_RES_0805",
		type: "resistor",
		name: "330R Resistor 0805",
		value: 330,
		unit: "R",
		package: "0805",
		count: 100
	},
	{
		id: "10KR_RES_0805",
		type: "resistor",
		name: "10KR Resistor 0805",
		value: 10000,
		unit: "R",
		package: "0805",
		count: 100
	},
	{
		id: "2K2R_RES_0805",
		type: "resistor",
		name: "2K2R Resistor 0805",
		value: 2200,
		unit: "R",
		package: "0805",
		count: 100
	},
	{
		id: "860R_RES_0805",
		type: "resistor",
		name: "860 Resistor 0805",
		value: 860,
		unit: "R",
		package: "0805",
		count: 100
	},
	// MODEL_TRAN_SOT23
	{
		id: "BTS443P_IC_TO252",
		type: "integrated circuit",
		name: "BTS-443-P Smart Highside PROFET",
		value: "BTS443",
		unit: "model",
		package: "TO-252",
		count: 100
	},
	{
		id: "BC817_TRAN_SOT23",
		type: "integrated circuit",
		name: "BC817K 45 V 500 mA NPN general-purpose transistor",
		value: "BC817KH",
		unit: "model",
		package: "SOT-23",
		count: 100
	}
];

async function preload({ params, query }) {
	let project = projects.filter(e => e.id == params.slug);

	let bom = projectToComponent.reduce(
		(acc, curr) => {
			if (curr.project == params.slug) {
				let component = components.filter(e => e.id.toLowerCase() == curr.component.toLowerCase())[0];
				let entry = { ...component, count: curr.required };
				return [...acc, entry];
			} else {
				return acc;
			}
		},
		[]
	);

	return { project: project[0], bom };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", slots, []);
	let { project } = $$props, { bom } = $$props;
	const writable_props = ["project", "bom"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("project" in $$props) $$invalidate(0, project = $$props.project);
		if ("bom" in $$props) $$invalidate(1, bom = $$props.bom);
	};

	$$self.$capture_state = () => ({
		projects,
		projectToComponent,
		components,
		preload,
		project,
		bom
	});

	$$self.$inject_state = $$props => {
		if ("project" in $$props) $$invalidate(0, project = $$props.project);
		if ("bom" in $$props) $$invalidate(1, bom = $$props.bom);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [project, bom];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { project: 0, bom: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*project*/ ctx[0] === undefined && !("project" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'project'");
		}

		if (/*bom*/ ctx[1] === undefined && !("bom" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'bom'");
		}
	}

	get project() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set project(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get bom() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set bom(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLmZkZTE1Y2Y5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Byb2plY3RzL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PSdtb2R1bGUnPlxuXG4gICAgbGV0IHByb2plY3RzID0gW1xuICAgICAgICB7aWQ6IFwiMVwiLG5hbWU6IFwiUERNIEJvYXJkXCIsZGVzY3JpcHRpb246IFwibG93IHZvbHRhZ2UgcG93ZXIgZGlzdHJpYnV0aW9uIGJvYXJkIGZvciB0aGUgY2FyXCIsfSxcbiAgICAgICAge2lkOiBcIjJcIixuYW1lOiBcIlNlZ21lbnQgUENCXCIsZGVzY3JpcHRpb246IFwic2VnbWVudCBQQ0IgZm9yIHRoZSBhY2N1bWlsYXRvci5cIix9LFxuICAgICAgICB7IGlkOiBcIjNcIiwgbmFtZTogXCJQQ0IgQ29tYmluYXRpb25cIiwgZGVzY3JpcHRpb246IFwiTWVydmluJ3MgUENCISEhXCIgfSxcbiAgICBdO1xuXG4gICAgbGV0IHByb2plY3RUb0NvbXBvbmVudCA9IFtcbiAgICAgICAge3Byb2plY3Q6XCIxXCIsY29tcG9uZW50OlwiMWs1Ul9yZXNfMDgwNVwiLCByZXF1aXJlZDozfSxcbiAgICAgICAge3Byb2plY3Q6XCIxXCIsY29tcG9uZW50OlwiMTBVRl9DQVBfS0VNRVRBXCIsIHJlcXVpcmVkOjEwfSxcbiAgICAgICAge3Byb2plY3Q6XCIxXCIsY29tcG9uZW50OlwiQlRTNDQzUF9JQ19UTzI1MlwiLCByZXF1aXJlZDo1fSxcbiAgICAgICAge3Byb2plY3Q6XCIyXCIsY29tcG9uZW50OlwiMXVmX2NhcF8wODA1XCIsIHJlcXVpcmVkOjJ9LFxuICAgICAgICB7cHJvamVjdDpcIjNcIixjb21wb25lbnQ6XCJiYzgxN190cmFuX3NvdDIzXCIsIHJlcXVpcmVkOjh9LFxuICAgICAgICB7cHJvamVjdDpcIjNcIixjb21wb25lbnQ6XCIxNlBGX0NBUF8wODA1XCIsIHJlcXVpcmVkOjJ9LFxuICAgICAgICB7cHJvamVjdDpcIjNcIixjb21wb25lbnQ6XCIySzJSX1JFU18wODA1XCIsIHJlcXVpcmVkOjV9LFxuICAgIF1cblxuICAgIGxldCBjb21wb25lbnRzID0gW1xuICAgICAgICAvLyAxMFVGX0NBUF8wODA1XG4gICAgICAgIHtpZDpcIjFVRl9DQVBfMDgwNVwiLCB0eXBlOidjYXBhY2l0b3InLCBuYW1lOicxdUYgQ2FwIDA4MDUnLCB2YWx1ZToxLCB1bml0Oid1RicsIHBhY2thZ2U6JzA4MDUnLCBjb3VudDoxMDB9LFxuICAgICAgICB7aWQ6XCIwLjFVRl9DQVBfMDgwNVwiLCB0eXBlOidjYXBhY2l0b3InLCBuYW1lOicwLjF1RiBDYXAgMDgwNScsIHZhbHVlOjAuMSwgdW5pdDondUYnLCBwYWNrYWdlOicwODA1JywgY291bnQ6MTAwfSxcbiAgICAgICAge2lkOlwiNC43VUZfQ0FQXzA4MDVcIiwgdHlwZTonY2FwYWNpdG9yJywgbmFtZTonNC43dUYgQ2FwIDA4MDUnLCB2YWx1ZTo0LjcsIHVuaXQ6J3VGJywgcGFja2FnZTonMDgwNScsIGNvdW50OjEwMH0sXG4gICAgICAgIHtpZDpcIjE2UEZfQ0FQXzA4MDVcIiwgdHlwZTonY2FwYWNpdG9yJywgbmFtZTonMTZwRiBDYXAgMDgwNScsIHZhbHVlOjE2LCB1bml0OidwRicsIHBhY2thZ2U6JzA4MDUnLCBjb3VudDoxMDB9LFxuICAgICAgICB7aWQ6XCIyMFVGX0NBUF9LRU1FVEFcIiwgdHlwZTonY2FwYWNpdG9yJywgbmFtZTonMjB1RiBDYXAgS0VNRVQgQScsIHZhbHVlOjIwLCB1bml0Oid1RicsIHBhY2thZ2U6J0tFTUVUIEEnLCBjb3VudDoxMDB9LFxuICAgICAgICB7aWQ6XCIxMFVGX0NBUF9LRU1FVEFcIiwgdHlwZTonY2FwYWNpdG9yJywgbmFtZTonMTB1RiBDYXAgS0VNRVQgQScsIHZhbHVlOjEwLCB1bml0Oid1RicsIHBhY2thZ2U6J0tFTUVUIEEnLCBjb3VudDoxMDB9LFxuXG4gICAgICAgIC8vIDFLNVJfUkVTXzA4MDVcbiAgICAgICAge2lkOlwiMUs1Ul9SRVNfMDgwNVwiLCB0eXBlOidyZXNpc3RvcicsIG5hbWU6JzFLNVIgUmVzaXN0b3IgMDgwNScsIHZhbHVlOjE1MDAsIHVuaXQ6J1InLCBwYWNrYWdlOicwODA1JywgY291bnQ6MTAwfSxcbiAgICAgICAge2lkOlwiMzMwUl9SRVNfMDgwNVwiLCB0eXBlOidyZXNpc3RvcicsIG5hbWU6JzMzMFIgUmVzaXN0b3IgMDgwNScsIHZhbHVlOjMzMCwgdW5pdDonUicsIHBhY2thZ2U6JzA4MDUnLCBjb3VudDoxMDB9LFxuICAgICAgICB7aWQ6XCIxMEtSX1JFU18wODA1XCIsIHR5cGU6J3Jlc2lzdG9yJywgbmFtZTonMTBLUiBSZXNpc3RvciAwODA1JywgdmFsdWU6MTAwMDAsIHVuaXQ6J1InLCBwYWNrYWdlOicwODA1JywgY291bnQ6MTAwfSxcbiAgICAgICAge2lkOlwiMksyUl9SRVNfMDgwNVwiLCB0eXBlOidyZXNpc3RvcicsIG5hbWU6JzJLMlIgUmVzaXN0b3IgMDgwNScsIHZhbHVlOjIyMDAsIHVuaXQ6J1InLCBwYWNrYWdlOicwODA1JywgY291bnQ6MTAwfSxcbiAgICAgICAge2lkOlwiODYwUl9SRVNfMDgwNVwiLCB0eXBlOidyZXNpc3RvcicsIG5hbWU6Jzg2MCBSZXNpc3RvciAwODA1JywgdmFsdWU6ODYwLCB1bml0OidSJywgcGFja2FnZTonMDgwNScsIGNvdW50OjEwMH0sXG5cbiAgICAgICAgLy8gTU9ERUxfVFJBTl9TT1QyM1xuICAgICAgICB7aWQ6XCJCVFM0NDNQX0lDX1RPMjUyXCIsIHR5cGU6J2ludGVncmF0ZWQgY2lyY3VpdCcsIG5hbWU6J0JUUy00NDMtUCBTbWFydCBIaWdoc2lkZSBQUk9GRVQnLCB2YWx1ZTonQlRTNDQzJywgdW5pdDonbW9kZWwnLCBwYWNrYWdlOidUTy0yNTInLCBjb3VudDoxMDB9LFxuICAgICAgICB7aWQ6XCJCQzgxN19UUkFOX1NPVDIzXCIsIHR5cGU6J2ludGVncmF0ZWQgY2lyY3VpdCcsIG5hbWU6J0JDODE3SyA0NSBWIDUwMCBtQSBOUE4gZ2VuZXJhbC1wdXJwb3NlIHRyYW5zaXN0b3InLCB2YWx1ZTonQkM4MTdLSCcsIHVuaXQ6J21vZGVsJywgcGFja2FnZTonU09ULTIzJywgY291bnQ6MTAwfSxcbiAgICBdXG5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7cGFyYW1zLCBxdWVyeX0pIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0cy5maWx0ZXIoZSA9PiBlLmlkID09IHBhcmFtcy5zbHVnKVxuXG4gICAgICAgIGxldCBib20gPSBwcm9qZWN0VG9Db21wb25lbnQucmVkdWNlKChhY2MsY3VycikgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnIucHJvamVjdCA9PSBwYXJhbXMuc2x1Zykge1xuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzLmZpbHRlcihlID0+IGUuaWQudG9Mb3dlckNhc2UoKSA9PSBjdXJyLmNvbXBvbmVudC50b0xvd2VyQ2FzZSgpKVswXVxuICAgICAgICAgICAgICAgIGxldCBlbnRyeSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBjb3VudDpjdXJyLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmFjYywgZW50cnldXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG5cbiAgICAgICAgcmV0dXJuIHtwcm9qZWN0OiBwcm9qZWN0WzBdLCBib206IGJvbX1cbiAgICB9XG5cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgcHJvamVjdCwgYm9tXG48L3NjcmlwdD5cblxuPGgxPntwcm9qZWN0Lm5hbWV9IDxzcGFuIHN0eWxlPSdjb2xvcjpncmF5OyBmb250LXNpemU6OXB0Jz5Qcm9qZWN0I3twcm9qZWN0LmlkfTwvc3Bhbj48L2gxPlxuXG48cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG5cbjxoMj5CaWxsIG9mIE1hdGVyaWFsczwvaDI+XG48ZGl2IHN0eWxlPSdkaXNwbGF5OmdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczoyZnIgNWZyIDFmciAxZnIgMWZyOyBmb250LXNpemU6OXB0OyBncmlkLWNvbHVtbi1nYXA6IDhwdDsnPlxuICAgIDxwIHN0eWxlPSdmb250LXdlaWdodDpib2xkJz5Db21wb25lbnQgSUQ8L3A+XG4gICAgPHAgc3R5bGU9J2ZvbnQtd2VpZ2h0OmJvbGQnPk5hbWUvRGVzY3JpcHRpb248L3A+XG4gICAgPHAgc3R5bGU9J2ZvbnQtd2VpZ2h0OmJvbGQnPlZhbHVlPC9wPlxuICAgIDxwIHN0eWxlPSdmb250LXdlaWdodDpib2xkJz5QYWNrYWdlPC9wPlxuICAgIDxwIHN0eWxlPSdmb250LXdlaWdodDpib2xkJz5SZXF1aXJlZDwvcD5cbiAgICB7I2VhY2ggYm9tIGFzIGNvbXBvbmVudH1cbiAgICA8cD57Y29tcG9uZW50LmlkfTwvcD5cbiAgICA8cD57Y29tcG9uZW50Lm5hbWV9PC9wPlxuICAgIDxwPntjb21wb25lbnQudmFsdWV9IHtjb21wb25lbnQudW5pdH08L3A+XG4gICAgPHA+e2NvbXBvbmVudC5wYWNrYWdlfTwvcD5cbiAgICA8cD57Y29tcG9uZW50LmNvdW50fTwvcD5cbiAgICB7L2VhY2h9XG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzhCQTRFUSxHQUFTLElBQUMsRUFBRTs7Ozs4QkFDWixHQUFTLElBQUMsSUFBSTs7Ozs4QkFDZCxHQUFTLElBQUMsS0FBSzs7OzhCQUFHLEdBQVMsSUFBQyxJQUFJOzs7OzhCQUNoQyxHQUFTLElBQUMsT0FBTzs7OzsrQkFDakIsR0FBUyxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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