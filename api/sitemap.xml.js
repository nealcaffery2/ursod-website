// API route to serve sitemap.xml
// This ensures the sitemap is always accessible

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
  
  <!-- Homepage - Highest Priority -->
  <url>
    <loc>https://ursod.co/</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://ursod.co/og-image.jpg</image:loc>
      <image:title>URSOD - Oil & Gas Acquisition & Exploration</image:title>
      <image:caption>Premier oil & gas acquisition and exploration company</image:caption>
    </image:image>
  </url>
  
  <!-- Services -->
  <url>
    <loc>https://ursod.co/raising-money.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Upstream Category Pages -->
  <url>
    <loc>https://ursod.co/upstream.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ursod.co/upstream-minerals.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/upstream-lease.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/upstream-permian.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/upstream-haynes.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/upstream-eagle-ford.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/upstream-bakken.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Midstream Category Pages -->
  <url>
    <loc>https://ursod.co/midstream.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ursod.co/midstream-vopak.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/midstream-kinder.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/midstream-fob.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/midstream-spot.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Commercial Real Estate Pages -->
  <url>
    <loc>https://ursod.co/office.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/industrial.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/multifamily.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/self-storage.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/btr.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ursod.co/datacenter.html</loc>
    <lastmod>2025-11-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
</urlset>`;

export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).send(sitemap);
}

