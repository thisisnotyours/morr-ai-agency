// src/components/layout/footer.tsx
export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white px-8 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-2">Morr</h2>
            <p className="text-sm mb-4">Build new AI products with voice data leveraging Morr's Speech AI models.</p>
            <div className="flex gap-3">
              <span>🎥</span>
              <span>𝕏</span>
              <span>🎮</span>
              <span>🔗</span>
            </div>
          </div>
  
          <div>
            <h4 className="font-semibold text-sm mb-2 text-gray-200">Product</h4>
            <ul className="space-y-1 text-sm">
              <li>Overview</li>
              <li>Speech-to-Text</li>
              <li>Streaming STT</li>
              <li>Speech Understanding</li>
              <li>Enterprise</li>
              <li>Pricing</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold text-sm mb-2 text-gray-200">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li>Blog</li>
              <li>Support</li>
              <li>Documentation</li>
              <li>Benchmarks</li>
              <li>Changelog</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold text-sm mb-2 text-gray-200">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About</li>
              <li>Contact sales</li>
              <li>Customers</li>
              <li>Startup Program</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs mt-10 text-gray-300">
          © 2025 Morr, Inc. · Terms · Privacy · Cookie Settings
        </div>
      </footer>
    );
  }
  