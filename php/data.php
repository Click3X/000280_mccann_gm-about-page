<?php 
// GM DATA
// FOR BLOCKS, ARRAY KEYS ARE USED AS CLASS NAMES FOR THE VALUES THEY WRAP
$pages = array(
	// OUR COMPANY
	array(
		"type"=>"page",
		"title"=>"Our Company",
		"tagline"=>"is a global automotive company united by a single purpose:",		
		"icon"=>"img/title-icons/our-company.png",
		"icon@2x"=>"img/title-icons/our-company.svg",
		"image"=>"img/logos/general-motors.png",
		"image@2x"=>"img/logos/general-motors.svg",
		"blocks"=>array(
			array(
				// "title"=>"To <strong>earn customers</strong> for <strong>life</strong>",
				"tagline"=>"To <strong>earn customers</strong> for <strong>life</strong>",
				"image"=>"",
				"image@2x"=>"",
				"class"=>"earn",
				"copy"=>"<strong>Earning customers for life is the foundational promise of General Motors.</strong> It is a commitment to treat every customer with respect. To care about a customer, not just when they purchase a new vehicle, but for as long as they own the vehicle. Appreciating customers and fighting every day to earn their loyalty inspires us to make better, safer, higher value cars, trucks and crossovers."
			)
		)
	),
	// OUR PEOPLE
	array(
		"type"=>"page",
		"title"=>"Our People",
		"tagline"=>"General Motors employs the finest workforce in the automotive world. We are a richly diverse and dedicated team.",
		"icon"=>"img/title-icons/our-people.png",
		"icon@2x"=>"img/title-icons/our-people.svg",
		"blocks"=>array(
			array(
				"title"=>"Employees",
				"image"=>"img/pages/people/people-icons.png",
				"image@2x"=>"img/pages/people/people-icons.svg",
				"class"=>"employees",
				"copy"=>array(
					"c3xgm-about-light-blue number"=>216000,
					"c3xgm-about-gray"=>"Employees"
				)
			),
			array(
				"title"=>"continents",
				"image"=>"img/pages/people/map.png",
				"image@2x"=>"img/pages/people/map.svg",
				"class"=>"continents",
				"copy"=>array(
					"c3xgm-about-dark-blue c3xgm-about-thin"=>"We Serve",
					"c3xgm-about-gray"=>"Continents",
					"c3xgm-about-light-blue number"=>6
				)
			),
			array(
				"title"=>"timezones",
				"image"=>"img/pages/people/time-zones.png",
				"image@2x"=>"img/pages/people/time-zones.svg",
				"class"=>"timezones",
				"copy"=>array(
					"c3xgm-about-dark-blue c3xgm-about-thin"=>"Across",
					"c3xgm-about-gray"=>"Timezones",
					"c3xgm-about-light-blue number"=>23
				)
			),
			array(
				"title"=>"Global headquarters",
				"image"=>"",
				"image@2x"=>"",
				"class"=>"headquarters clear-left",
				"copy"=>array(
					"c3xgm-about-light-blue"=>"Global headquarters",
					"c3xgm-about-gray"=>"<span>Detroit</span> Michigan, USA"
				)
			),
			array(
				"title"=>"languages",
				"image"=>"img/pages/people/language.png",
				"image@2x"=>"img/pages/people/language.svg",
				"class"=>"languages",
				"copy"=>array(
					"c3xgm-about-dark-blue c3xgm-about-thin"=>"And we speak",
					"c3xgm-about-gray"=>"Languages",
					"c3xgm-about-light-blue number"=>70
				)
			)
		)
	),
	// OUR BRANDS
	array(
		"type"=>"page",
		"title"=>"Our Brands",
		"tagline"=>"From electric mini-cars to heavy-duty full-size trucks, GM provides a complete range of vehicles that meets the needs and expectations of drivers on a truly global scale. There are 9 distinctive automotive brands under the GM corporate umbrella: Chevrolet, Buick, GMC, Cadillac, Opel, Vauxhall, Holden, Baojun and Wuling.",
		"icon"=>"img/title-icons/our-brands.png",
		"icon@2x"=>"img/title-icons/our-brands.svg",
		"module"=>array(
			"name"=>"car",
			"blocks"=>array(
				array(
					"title"=>"Chevrolet",
					"vehicle"=>"2015 Colorado LTZ",
					"vehicle-copy"=>"2015 Chevrolet Colorado LTZ 26 MPG/HWY",
					"image"=>"img/modules/car/gmc-chevrolet.png",
					"logo"=>"img/company-logos/chevy-logo.jpg",
					"copy"=>"An innovative range of award-winning, affordable and fuel-efficient cars, trucks and SUVs, designed and built for a better driving experience. Learn more at Chevrolet.com.",
					"link"=>"http://www.chevrolet.com"
				),
				array(
					"title"=>"Buick",
					"vehicle"=>"2015 Encore",
					"vehicle-copy"=>"2015 Buick Encore XX MPG/HWY",
					"image"=>"img/modules/car/buick.png",
					"logo"=>"img/company-logos/buick-logo.jpg",
					"copy"=>"Award-winning, modern luxury sedans and crossovers, marrying sculpted design, fuel-efficiency, spirited performance and advanced technology. It’s luxury as it should be, your kind of luxury.",
					"link"=>"http://www.buick.com"
				),
				array(
					"title"=>"GMC",
					"vehicle"=>"2015 Yukon Denali",
					"vehicle-copy"=>"2015 GMC Yukon Denali",
					"image"=>"img/modules/car/gmc-yukon.png",
					"logo"=>"img/company-logos/gmc-logo.jpg",
					"copy"=>"Purpose-built vehicles reaching a higher standard through engineering excellence and innovation. We give our customers the power to be their best. We are Professional Grade. Learn more at GMC.com.",
					"link"=>"http://www.gmc.com"
				),
				array(
					"title"=>"Cadillac",
					"vehicle"=>"2015 CTS Sedan",
					"vehicle-copy"=>"2015 Cadillac CTS Sedan",
					"image"=>"img/modules/car/cadillac.png",
					"logo"=>"img/company-logos/cadillac-logo.jpg",
					"copy"=>"The bold, daring and original Cadillac lineup seamlessly blends driving dynamics, refinement and technology to satisfy enthusiasts and luxury seekers alike. Learn more at Cadillac.com.",
					"link"=>"http://www.cadillac.com"
				),
				array(
					"title"=>"Opel",
					"vehicle"=>"Antara",
					"vehicle-copy"=>"2015 Opel Antara",
					"image"=>"img/modules/car/opel-antara.png",
					"logo"=>"img/company-logos/opel-logo.jpg",
					"copy"=>"We live and breathe the German commitment to quality. It’s evident in our precision-engineered, affordable vehicles and, above all, in the ride and handling that make every Opel so exciting to drive. Learn more at Opel.com.",
					"link"=>"http://www.opel.com"
				),
				array(
					"title"=>"Vauxhall",
					"vehicle"=>"Adam",
					"vehicle-copy"=>"2015 Vauxhall Adam",
					"image"=>"img/modules/car/vauxhall-adam.png",
					"logo"=>"img/company-logos/vauxhall-logo.jpg",
					"copy"=>"Vauxhall has always emphasized forward thinking – creating exciting, clever designs that anticipate customers’ needs and set the trends. Learn more at Vauxhall.co.uk.",
					"link"=>"http://www.vauxhall.co.uk"
				),
				array(
					"title"=>"Holden",
					"vehicle"=>"TBD",
					"vehicle-copy"=>"2015 Holden TBD",
					"image"=>"",
					"logo"=>"img/company-logos/holden-logo.jpg",
					"copy"=>"One of only seven fully integrated global General Motors operations that designs, builds and sells vehicles for Australia and the world. Learn more at Holden.com.au.",
					"link"=>"http://www.holden.com.au"
				),
				array(
					"title"=>"Baojun",
					"vehicle"=>"730 MPV",
					"vehicle-copy"=>"2015 Baojun 730 MPV",
					"image"=>"",
					"logo"=>"img/company-logos/baojun-logo.jpg",
					"copy"=>"As General Motors’ youngest brand in China, Baojun means “trustworthy companion” and gives first-time buyers access to reliable, attractive vehicles that meet high-quality, global standards. Learn more at AutoBaojun.com.",
					"link"=>"http://www.autobaojun.com"
				),
				array(
					"title"=>"Wuling",
					"vehicle"=>"N300S Rong Guang S Van",
					"vehicle-copy"=>"2015 Wuling N300S Rong Guang S Van",
					"image"=>"",
					"logo"=>"img/company-logos/wuling-logo.jpg",
					"copy"=>"With the goal of enriching customers’ lives, Wuling provides affordable small and mini-car products to meet the needs of both individual and commercial customers in China and other global markets. Learn more at WulingMotors.com.",
					"link"=>"http://www.wulingmotors.com"
				)
			)
		),
		"blocks"=>array(
			array(
				"title"=>"Global",
				"image"=>"img/pages/brands/world.png",
				"image@2x"=>"img/pages/brands/world.svg",
				"class"=>"global",
				"copy"=>array(
					"c3xgm-about-dark-blue c3xgm-about-thin"=>"In 2014, we <strong>delivered</strong> over",
					"c3xgm-about-light-blue number"=>"9.9 Million",
					"c3xgm-about-gray"=>"Vehicles Globally"
				)
			),
			array(
				"title"=>"Seconds",
				"image"=>"img/pages/brands/clock.png",
				"image@2x"=>"img/pages/brands/clock.svg",
				"class"=>"seconds",
				"copy"=>array(
					"c3xgm-about-dark-blue c3xgm-about-thin"=>"A <strong>Chevy is sold</strong> somewhere in the world",
					"c3xgm-about-light-blue c3xgm-about-thin number"=>"every <strong>6.63 seconds</strong>"
				)
			),
			array(
				"title"=>"Dealers",
				"image"=>"",
				"class"=>"dealers",
				"copy"=>array(
					"c3xgm-about-dark-blue c3xgm-about-thin"=>"There are over <strong>20,000</strong><br><span>Dealers in</span>",
					"c3xgm-about-light-blue number"=>140,
					"c3xgm-about-gray"=>"Countries"
				)
			),
			array(
				"title"=>"China",
				"image"=>"img/pages/brands/flag.png",
				"image@2x"=>"img/pages/brands/flag.svg",
				"class"=>"china",
				"copy"=>array(
					"c3xgm-about-light-blue c3xgm-about-thin"=>"in <strong>China</strong>",
					"c3xgm-about-gray"=>"5 million vehicles annually",
					"c3xgm-about-dark-blue c3xgm-about-thin"=>"GM will open five new manufacturing plants<br>By <strong>2018</strong> to support sales of nearly",
				)
			),
			array(
				"title"=>"Cadillac",
				"image"=>"img/pages/brands/cadillac-logo.png",
				"class"=>"cadillac",
				"copy"=>array(
					"c3xgm-about-dark-blue c3xgm-about-thin"=>"<strong>Cadillac</strong> was named",
					"c3xgm-about-gray"=>"The fastest growing full-line luxury brand",
					"c3xgm-about-thin"=>"in 2013"
				)
			),
			array(
				"title"=>"Chevrolet",
				"image"=>"img/pages/brands/chevy-logo.png",
				"class"=>"chevrolet",
				"copy"=>array(
					"c3xgm-about-dark-blue c3xgm-about-thin"=>"<strong>Chevrolet</strong> won both",
					"c3xgm-about-gray"=>"2014 car &amp; truck of the year"
				)
			)
		)
	),
	// OUR COMMITMENT
	array(
		"type"=>"page",
		"title"=>"Our Commitment",
		"tagline"=>"",
		"icon"=>"img/title-icons/our-commitment.png",
		"icon@2x"=>"img/title-icons/our-commitment.svg",
		"sections"=>array(
			// SAFETY & QUALITY
			array(
				"title"=>"Safety &amp; Quality",
				"tagline"=>"We assign the highest priority to matters that impact our customers’ well-being and quality of life. As a result, GM is driven to maintain the highest quality standards. Quality and safety are part of our very foundation. Safety is something we will never compromise.",
				"blocks"=>array(
					array(
						"title"=>"Crash Test Dummies",
						"image"=>"img/pages/commitment/crash-test-dummies.png",
						"image@2x"=>"img/pages/commitment/crash-test-dummies.svg",
						"class"=>"crash-test-dummies",
						"copy"=>array(
							"c3xgm-about-dark-blue c3xgm-about-thin"=>"We Designed",
							"c3xgm-about-light-blue"=>"Crash Test Dummies",
							"c3xgm-about-light-gray c3xgm-about-thin"=>"The <strong>global standard</strong> for frontal crash testing"
						)
					),
					array(
						"title"=>"Test Facility",
						"image"=>"img/pages/commitment/truck-front.png",
						"class"=>"test-facility",
						"copy"=>array(
							"c3xgm-about-dark-blue c3xgm-about-thin"=>"The first North American <br>auto manufacturer",
							"c3xgm-about-gray"=>"to build a",
							"c3xgm-about-light-blue c3xgm-about-yellow-bar-left-wrapper"=>"Rollover Test Facility"
						)
					),
					array(
						"title"=>"Safety Score",
						"image"=>"",
						"class"=>"safety-score",
						"copy"=>array(
							"c3xgm-about-light-blue number"=>63,
							"c3xgm-about-dark-blue"=>"<strong>General Motors</strong>",
							"c3xgm-about-dark-blue c3xgm-about-thin"=>"2014 model year vehicles earned the",
							"c3xgm-about-light-blue"=>"Highest possible overall vehicle safety score",
							"c3xgm-about-light-gray c3xgm-about-thin"=>"In their respective markets by the <br><strong>2014 New Car Assessment Program</strong> (NCFAP)"
						)
					),
					array(
						"title"=>"Onstar Subscribers",
						"image"=>"img/pages/commitment/on-star.png",
						"image@2x"=>"img/pages/commitment/on-star.svg",
						"class"=>"onstar-subscribers",
						"copy"=>array(
							"c3xgm-about-dark-blue c3xgm-about-thin c3xgm-about-small"=>"Nearly",
							"c3xgm-about-light-blue number"=>7,
							"c3xgm-about-light-blue"=>"Million",
							"c3xgm-about-dark-blue c3xgm-about-thin"=>"Onstar subscribers",
							"c3xgm-about-gray"=>"Globally"
						)
					)
					// array(
					// 	"title"=>"Quality Awards",
					// 	"image"=>"img/pages/commitment/award.png",
					// 	"class"=>"quality-awards",
					// 	"copy"=>array(
					// 		"<strong>General Motors</strong> received more",
					// 		"J.D. Power initial quality awards",
					// 		"Than any other automaker <strong>two years in a row</strong> in an industry leading benchmark study.",
					// 		"The Chevrolet Malibu, Silverado HD, Suburban, Buick Encore, GMC Terrain, and GMC Yukon were awarded the \"Highest Ranked Midsize Car, Large Heavy Duty Pickup, Large SUV (tie), Small SUV(tie), and Compact SUV in Initial Quality\"",
					// 		"<strong>DISCLAIMER:</strong> The Chevrolet Malibu, Chevrolet Silverado HD, Chevrolet Suburban, Buick Encore, GMC Terrain, and GMC Yukon received the lowest number of problems per 100 vehicles in the Midsize Car, Large Heavy Duty Pickup, Large SUV (tie), Small SUV (tie), and Compact SUV segments in the J.D. Power 2014 Initial Quality StudySM. Study based on responses from 86,118 new-vehicle owners, measuring 239 models and measures opinions after 90 days of ownership. Proprietary study results are based on experiences and perceptions of owners surveyed in February-May 2014. Your experiences may vary. Visit <a href=\"http://jdpower.com\">jdpower.com</a>."
					// 	)
					// )
				)
			),
			// TECHNOLOGY
			array(
				"title"=>"Technology",
				"tagline"=>"Historically, GM technology has always been on the forefront. We continue to excel in engine and drivetrain development, and strive to push exciting advancements in alternative energy and purposeful vehicle design.",
				"module"=>array(
					"name"=>"technology",
					"background-image"=>"img/modules/technology/blue-car.png",
					"blocks"=>array(
						array(
							"title"=>"4G LTE",
							"class"=>"4g-lte",
							"image"=>"img/modules/technology/4g-lte/4g-lte.png",
							"image@2x"=>"img/modules/technology/4g-lte/4g-lte.png",
							"copy"=>array(
								"Offering",
								"4G LTE Connectivity",
								"On more vehicles than any other auto manufacturer combined"
							)
							// "marker"=>array(x,y)
						),
						array(
							"title"=>"Concept Car",
							"class"=>"concept-car",
							"image"=>"img/modules/technology/bolt/bolt.png",
							"image@2x"=>"img/modules/technology/bolt/bolt.png",
							"copy"=>array(
								"Creating the affordable electric",
								"Chevrolet Bolt Concept Car",
								"Capable of traveling over <strong>200 miles</strong> on a single charge"
							)
							// "marker"=>array(x,y)
						),
						array(
							"title"=>"Safety",
							"class"=>"safety",
							"image"=>"img/modules/technology/safety/safety.png",
							"image@2x"=>"img/modules/technology/safety/safety.png",
							"copy"=>array(
								"Enhancing",
								"Driver Vision &amp; Safety",
								"With a <strong>Patented streaming video rearview mirror</strong>"
							)
							// "marker"=>array(x,y)
						)
					)
				)
			),
			// ENVIRONMENT
			array(
				"title"=>"Environment",
				"tagline"=>"A key focus of GM’s customer-first approach is to seek creative and innovative solutions for the environment. We consistently adopt policies and develop technologies that promote a cleaner planet from supply chain to manufacturing to the vehicles we put on the road.",
				"blocks"=>array(
					array(
						"title"=>"Clean Energy",
						"image"=>"",
						"class"=>"clean-energy",
						"copy"=>array(
							"c3xgm-about-dark-blue c3xgm-about-thin"=>"We granted more",
							"c3xgm-about-light-blue"=>"clean-energy",
							"c3xgm-about-light-blue c3xgm-about-thin"=>"patents",
							"c3xgm-about-gray"=>"Than anybody else for <br>more than a decade"
						)
					),
					array(
						"title"=>"EPA Energy Star",
						"image"=>"img/pages/commitment/energy-ribbon.png",
						"image@2x"=>"img/pages/commitment/energy-ribbon.svg",
						"class"=>"epa-energy-star text-right",
						"copy"=>array(
							"c3xgm-about-dark-blue c3xgm-about-thin"=>"<strong>70 Facilities</strong> received",
							"c3xgm-about-light-blue"=>"EPA Energy Star",
							"c3xgm-about-gray"=>"Challenge for Industry"
						)
					),
					array(
						"title"=>"Climate Declaration",
						"image"=>"img/pages/commitment/climate.png",
						"image@2x"=>"img/pages/commitment/climate.svg",
						"class"=>"climate-declaration",
						"copy"=>array(
							"c3xgm-about-dark-blue c3xgm-about-thin"=>"General Motors is the <strong>only automaker</strong> to sign a",
							"c3xgm-about-light-blue"=>"Climate Declaration",
							"c3xgm-about-gray c3xgm-about-thin"=>"making <strong>tackling climate change <br>a priority"
						)
					),
					array(
						"title"=>"Landfill Free",
						"image"=>"img/pages/commitment/landfill.png",
						"image@2x"=>"img/pages/commitment/landfill.svg",
						"class"=>"landfill-free text-right",
						"copy"=>array(
							"c3xgm-about-dark-blue c3xgm-about-thin"=>"We have <strong>123</strong>",
							"c3xgm-about-light-blue"=>"Landfill-free facilities",
							"c3xgm-about-gray"=>"More than any other automaker"
						)
					)
				)
			),
			// OUR GLOBAL COMMUNITY
			array(
				"title"=>"Our Global Community",
				"tagline"=>"For decades, the GM Foundation has donated hundreds of millions of dollars to support education, health and human services, the environment, community development and disaster relief efforts.",
				"module"=>array(
					"name"=>"foundation",
					"blocks"=>array(
						array(
							"title"=>"GM Foundation",
							"class"=>"gm-foundation",
							"image"=>"img/modules/foundation/gm-foundation.jpg",
							"copy"=>"GM Foundation provided grants totaling &dollar;2.875 million to support 29 leading universities and organizations in 201 grants totaling nearly &dollar;45.6 million over the last decade."
						),
						array(
							"title"=>"Buick Achievers Scholarship Program",
							"class"=>"buick-achievers",
							"image"=>"img/modules/foundation/buick-achievers.jpg",
							"copy"=>"Buick Achievers Scholarship Program annually awards scholarships up to $25,000 to students pursuing STEM majors and other fields related to the auto industry."
						),
						array(
							"title"=>"Safe Kids USA",
							"class"=>"safe-kids-usa",
							"image"=>"img/modules/foundation/safe-kids.png",
							"copy"=>"For nearly two decades, General Motors and the GM Foundation have partnered with Safe Kids to promote child passenger safety."
						),
						array(
							"title"=>"Habitat for Humanity",
							"class"=>"habitat-humanity",
							"image"=>"img/modules/foundation/habitat.jpg",
							"copy"=>"The GM Foundation is committed to helping Habitat for Humanity partner families find homes and supporting United States military veterans through programs designed to move their lives forward."
						),
						array(
							"title"=>"United Way",
							"class"=>"united-way",
							"image"=>"img/modules/foundation/united-way.jpg",
							"copy"=>"In 2011, the GM Foundation pledged &dollar;27.1 million to United Way of Southeastern Michigan to increase graduation rates from 50 to 80 percent by 2015."
						)
					)
				)
			)
		)
	)
);

?>