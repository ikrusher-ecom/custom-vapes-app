/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 00:58:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-12 01:03:23
 * @FilePath: /custom-vapes-app/pages/components/StepTwo.js
 */
import Image from 'next/image';

export default function StepTwo() {
	return (
		<div id="custom-step2" style={{ display: none }}>
			<h5>Step 2: Select a product to customize</h5>
			<p>
				Instruction here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
				eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.
			</p>
			<div className="step2-group">
				<div id="pod-system" className="step2-product" style="display: none;">
					<button type="button" value="xen-air" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/pod-system/xen-air.jpg" alt="xen-air" width="200" />
						<span>Xen Air</span>
					</button>
					<button type="button" value="vfire-pro" onClick={selectProduct(this.value)} className="product-img">
						<Image
							src="/media/customVapes/pod-system/vfire-mini-pro.jpg"
							alt="vfire-mini-pro"
							width="200"
						/>
						<span>VFire Pro</span>
					</button>
					<button type="button" value="katto" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/pod-system/katto.jpg" alt="katto" width="200" />
						<span>Katto</span>
					</button>
					<button
						type="button"
						value="astro-stik"
						onClick={selectProduct(this.value)}
						className="product-img"
					>
						<Image src="/media/customVapes/pod-system/astro-stik.jpg" alt="astro-stik" width="200" />
						<span>Astro Stik</span>
					</button>
					<button type="button" value="astro-mod" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/pod-system/astro-mod.jpg" alt="astro-mod" width="200" />
						<span>Astro Mod</span>
					</button>
				</div>
				<div id="cartridges" className="step2-product" style="display: none;">
					<button type="button" value="tux-pro" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/cartridges/tux-pro.jpg" alt="tux-pro" width="200" />
						<span>Tux Pro</span>
					</button>
					<button
						type="button"
						value="calibr-pro-plastic"
						onClick={selectProduct(this.value)}
						className="product-img"
					>
						<Image
							src="/media/customVapes/cartridges/calibr-pro-plastic.jpg"
							alt="calibr-pro-plastic"
							width="200"
						/>
						<span>Calibr Pro Plastic</span>
					</button>
					<button
						type="button"
						value="calibr-pro-ceramic"
						onClick={selectProduct(this.value)}
						className="product-img"
					>
						<Image
							src="/media/customVapes/cartridges/calibr-pro-ceramic.jpg"
							alt="calibr-pro-ceramic"
							width="200"
						/>
						<span>Calibr Pro Ceramic</span>
					</button>
				</div>
				<div id="disposables" className="step2-product" style="display: none;">
					<button type="button" value="xodos" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/disposables/xodos.jpg" alt="xodos" width="200" />
						<span>Xodos</span>
					</button>
					<button type="button" value="xodos pro" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/disposables/xodos-pro.jpg" alt="xodos pro" width="200" />
						<span>Xodos Pro</span>
					</button>
					<button type="button" value="xen-bar" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/disposables/xenbar.jpg" alt="xen-bar" width="200" />
						<span>Xen Bar</span>
					</button>
					<button
						type="button"
						value="xen-bar-pro"
						onClick={selectProduct(this.value)}
						className="product-img"
					>
						<Image src="/media/customVapes/disposables/xenbar-pro.jpg" alt="xen-bar-pro" width="200" />
						<span>Xen Bar Pro</span>
					</button>
					<button type="button" value="uzo" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/disposables/uzo.jpg" alt="uzo" width="200" />
						<span>UZO</span>
					</button>
					<button
						type="button"
						value="uzo plus 2.0"
						onClick={selectProduct(this.value)}
						className="product-img"
					>
						<Image src="/media/customVapes/disposables/uzo-plus.jpg" alt="uzo" width="200" />
						<span>UZO Plus 2.0</span>
					</button>
					<button type="button" value="tik-pro" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/disposables/tik-pro.jpg" alt="tik-pro" width="200" />
						<span>Tik Pro</span>
					</button>
					<button type="button" value="nord" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/disposables/nord.jpg" alt="nord" width="200" />
						<span>Nord</span>
					</button>
					<button type="button" value="eros" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/disposables/eros.jpg" alt="eros" width="200" />
						<span>Eros</span>
					</button>
					<button
						type="button"
						value="eros-pro round"
						onClick={selectProduct(this.value)}
						className="product-img"
					>
						<Image
							src="/media/customVapes/disposables/eros-pro-round.jpg"
							alt="eros-pro round"
							width="200"
						/>
						<span>Eros Pro Round Tip</span>
					</button>
					<button
						type="button"
						value="eros-pro flat"
						onClick={selectProduct(this.value)}
						className="product-img"
					>
						<Image src="/media/customVapes/disposables/eros-pro-flat.jpg" alt="eros-pro flat" width="200" />
						<span>Eros Pro Flat Tip</span>
					</button>
					<button type="button" value="crest pro" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/disposables/crest-pro.jpg" alt="crest" width="200" />
						<span>Crest Pro</span>
					</button>
				</div>
				<div id="batteries" className="step2-product" style="display: none;">
					<button type="button" value="vfire-pro" onClick={selectProduct(this.value)} className="product-img">
						<Image
							src="/media/customVapes/batteries/vfire-mini-pro-battery.jpg"
							alt="vfire-pro-mini"
							width="200"
						/>
						<span>VFire Pro Battery</span>
					</button>
					<button type="button" value="s1" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/batteries/s1.jpg" alt="s1" width="200" />
						<span>S1</span>
					</button>
					<button type="button" value="s2" onClick={selectProduct(this.value)} className="product-img">
						<Image src="/media/customVapes/batteries/s2.jpg" alt="s2" width="200" />
						<span>S2</span>
					</button>
					<button
						type="button"
						value="astro-stik-battery"
						onClick={selectProduct(this.value)}
						className="product-img"
					>
						<Image
							src="/media/customVapes/batteries/astro-stik-battery.jpg"
							alt="astro-stik-battery"
							width="200"
						/>
						<span>Astro Stik Battery</span>
					</button>
					<button
						type="button"
						value="astro-mod-battery"
						onClick={selectProduct(this.value)}
						className="product-img"
					>
						<Image
							src="/media/customVapes/batteries/astro-mod-battery.jpg"
							alt="astro-mod-battery"
							width="200"
						/>
						<span>Astro Mod Battery</span>
					</button>
				</div>
			</div>
		</div>
	);
}
